# `googleDiscoveryEngineLicenseConfig` Submodule <a name="`googleDiscoveryEngineLicenseConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineLicenseConfig <a name="GoogleDiscoveryEngineLicenseConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config google_discovery_engine_license_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_config_id: str,
  license_count: typing.Union[int, float],
  location: str,
  start_date: GoogleDiscoveryEngineLicenseConfigStartDate,
  subscription_term: str,
  subscription_tier: str,
  auto_renew: bool | IResolvable = None,
  end_date: GoogleDiscoveryEngineLicenseConfigEndDate = None,
  free_trial: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineLicenseConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId">license_config_id</a></code> | <code>str</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm">subscription_term</a></code> | <code>str</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier">subscription_tier</a></code> | <code>str</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseConfigId"></a>

- *Type:* str

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.licenseCount"></a>

- *Type:* typing.Union[int, float]

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.startDate"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTerm"></a>

- *Type:* str

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.subscriptionTier"></a>

- *Type:* str

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.autoRenew"></a>

- *Type:* bool | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.endDate"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `free_trial`<sup>Optional</sup> <a name="free_trial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.freeTrial"></a>

- *Type:* bool | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate">reset_end_date</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial">reset_free_trial</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_end_date` <a name="put_end_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
) -> None
```

###### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

###### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

###### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}.

---

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_end_date` <a name="reset_end_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetEndDate"></a>

```python
def reset_end_date() -> None
```

##### `reset_free_trial` <a name="reset_free_trial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetFreeTrial"></a>

```python
def reset_free_trial() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineLicenseConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineLicenseConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineLicenseConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineLicenseConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput">auto_renew_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput">free_trial_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput">license_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput">license_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput">subscription_term_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput">subscription_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId">license_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm">subscription_term</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier">subscription_tier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDate"></a>

```python
end_date: GoogleDiscoveryEngineLicenseConfigEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference">GoogleDiscoveryEngineLicenseConfigEndDateOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDate"></a>

```python
start_date: GoogleDiscoveryEngineLicenseConfigStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference">GoogleDiscoveryEngineLicenseConfigStartDateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference">GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference</a>

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenewInput"></a>

```python
auto_renew_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.endDateInput"></a>

```python
end_date_input: GoogleDiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---

##### `free_trial_input`<sup>Optional</sup> <a name="free_trial_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrialInput"></a>

```python
free_trial_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_config_id_input`<sup>Optional</sup> <a name="license_config_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigIdInput"></a>

```python
license_config_id_input: str
```

- *Type:* str

---

##### `license_count_input`<sup>Optional</sup> <a name="license_count_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCountInput"></a>

```python
license_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.startDateInput"></a>

```python
start_date_input: GoogleDiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---

##### `subscription_term_input`<sup>Optional</sup> <a name="subscription_term_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTermInput"></a>

```python
subscription_term_input: str
```

- *Type:* str

---

##### `subscription_tier_input`<sup>Optional</sup> <a name="subscription_tier_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTierInput"></a>

```python
subscription_tier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDiscoveryEngineLicenseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `free_trial`<sup>Required</sup> <a name="free_trial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.freeTrial"></a>

```python
free_trial: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseConfigId"></a>

```python
license_config_id: str
```

- *Type:* str

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTerm"></a>

```python
subscription_term: str
```

- *Type:* str

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.subscriptionTier"></a>

```python
subscription_tier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineLicenseConfigConfig <a name="GoogleDiscoveryEngineLicenseConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  license_config_id: str,
  license_count: typing.Union[int, float],
  location: str,
  start_date: GoogleDiscoveryEngineLicenseConfigStartDate,
  subscription_term: str,
  subscription_tier: str,
  auto_renew: bool | IResolvable = None,
  end_date: GoogleDiscoveryEngineLicenseConfigEndDate = None,
  free_trial: bool | IResolvable = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineLicenseConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId">license_config_id</a></code> | <code>str</code> | The unique id of the license config. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount">license_count</a></code> | <code>typing.Union[int, float]</code> | Number of licenses purchased. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate">start_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm">subscription_term</a></code> | <code>str</code> | Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier">subscription_tier</a></code> | <code>str</code> | Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config should be auto renewed when it reaches the end date. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate">end_date</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial">free_trial</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the license config is for free trial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `license_config_id`<sup>Required</sup> <a name="license_config_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseConfigId"></a>

```python
license_config_id: str
```

- *Type:* str

The unique id of the license config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#license_config_id GoogleDiscoveryEngineLicenseConfig#license_config_id}

---

##### `license_count`<sup>Required</sup> <a name="license_count" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.licenseCount"></a>

```python
license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of licenses purchased.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#license_count GoogleDiscoveryEngineLicenseConfig#license_count}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#location GoogleDiscoveryEngineLicenseConfig#location}

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.startDate"></a>

```python
start_date: GoogleDiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#start_date GoogleDiscoveryEngineLicenseConfig#start_date}

---

##### `subscription_term`<sup>Required</sup> <a name="subscription_term" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTerm"></a>

```python
subscription_term: str
```

- *Type:* str

Subscription term. Possible values: ["SUBSCRIPTION_TERM_UNSPECIFIED", "SUBSCRIPTION_TERM_ONE_MONTH", "SUBSCRIPTION_TERM_ONE_YEAR", "SUBSCRIPTION_TERM_THREE_YEARS", "SUBSCRIPTION_TERM_THREE_MONTHS", "SUBSCRIPTION_TERM_FOURTEEN_DAYS", "SUBSCRIPTION_TERM_CUSTOM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#subscription_term GoogleDiscoveryEngineLicenseConfig#subscription_term}

---

##### `subscription_tier`<sup>Required</sup> <a name="subscription_tier" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.subscriptionTier"></a>

```python
subscription_tier: str
```

- *Type:* str

Subscription tier information for the license config. Possible values: ["SUBSCRIPTION_TIER_UNSPECIFIED", "SUBSCRIPTION_TIER_SEARCH", "SUBSCRIPTION_TIER_SEARCH_AND_ASSISTANT", "SUBSCRIPTION_TIER_NOTEBOOK_LM", "SUBSCRIPTION_TIER_FRONTLINE_WORKER", "SUBSCRIPTION_TIER_AGENTSPACE_STARTER", "SUBSCRIPTION_TIER_AGENTSPACE_BUSINESS", "SUBSCRIPTION_TIER_ENTERPRISE", "SUBSCRIPTION_TIER_EDU", "SUBSCRIPTION_TIER_EDU_PRO"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#subscription_tier GoogleDiscoveryEngineLicenseConfig#subscription_tier}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the license config should be auto renewed when it reaches the end date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#auto_renew GoogleDiscoveryEngineLicenseConfig#auto_renew}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.endDate"></a>

```python
end_date: GoogleDiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#end_date GoogleDiscoveryEngineLicenseConfig#end_date}

---

##### `free_trial`<sup>Optional</sup> <a name="free_trial" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.freeTrial"></a>

```python
free_trial: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the license config is for free trial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#free_trial GoogleDiscoveryEngineLicenseConfig#free_trial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#id GoogleDiscoveryEngineLicenseConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#project GoogleDiscoveryEngineLicenseConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineLicenseConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#timeouts GoogleDiscoveryEngineLicenseConfig#timeouts}

---

### GoogleDiscoveryEngineLicenseConfigEndDate <a name="GoogleDiscoveryEngineLicenseConfigEndDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigStartDate <a name="GoogleDiscoveryEngineLicenseConfigStartDate" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate(
  day: typing.Union[int, float] = None,
  month: typing.Union[int, float] = None,
  year: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#day GoogleDiscoveryEngineLicenseConfig#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#month GoogleDiscoveryEngineLicenseConfig#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#year GoogleDiscoveryEngineLicenseConfig#year}

---

### GoogleDiscoveryEngineLicenseConfigTimeouts <a name="GoogleDiscoveryEngineLicenseConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#create GoogleDiscoveryEngineLicenseConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#delete GoogleDiscoveryEngineLicenseConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_license_config#update GoogleDiscoveryEngineLicenseConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineLicenseConfigEndDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigEndDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineLicenseConfigEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigEndDate">GoogleDiscoveryEngineLicenseConfigEndDate</a>

---


### GoogleDiscoveryEngineLicenseConfigStartDateOutputReference <a name="GoogleDiscoveryEngineLicenseConfigStartDateOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day` <a name="reset_day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineLicenseConfigStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigStartDate">GoogleDiscoveryEngineLicenseConfigStartDate</a>

---


### GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_license_config

googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineLicenseConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineLicenseConfig.GoogleDiscoveryEngineLicenseConfigTimeouts">GoogleDiscoveryEngineLicenseConfigTimeouts</a>

---



