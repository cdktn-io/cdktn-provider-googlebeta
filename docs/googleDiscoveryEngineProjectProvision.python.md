# `googleDiscoveryEngineProjectProvision` Submodule <a name="`googleDiscoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineProjectProvision <a name="GoogleDiscoveryEngineProjectProvision" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_data_use_terms: bool | IResolvable = None,
  data_use_terms_version: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  saas_params: GoogleDiscoveryEngineProjectProvisionSaasParams = None,
  timeouts: GoogleDiscoveryEngineProjectProvisionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_data_use_terms`<sup>Optional</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.acceptDataUseTerms"></a>

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `data_use_terms_version`<sup>Optional</sup> <a name="data_use_terms_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.dataUseTermsVersion"></a>

- *Type:* str

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.location"></a>

- *Type:* str

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `saas_params`<sup>Optional</sup> <a name="saas_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.saasParams"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams">put_saas_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms">reset_accept_data_use_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion">reset_data_use_terms_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams">reset_saas_params</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_saas_params` <a name="put_saas_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams"></a>

```python
def put_saas_params(
  accept_biz_qos: bool | IResolvable = None,
  is_biz: bool | IResolvable = None
) -> None
```

###### `accept_biz_qos`<sup>Optional</sup> <a name="accept_biz_qos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams.parameter.acceptBizQos"></a>

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_biz_qos GoogleDiscoveryEngineProjectProvision#accept_biz_qos}

---

###### `is_biz`<sup>Optional</sup> <a name="is_biz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams.parameter.isBiz"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#is_biz GoogleDiscoveryEngineProjectProvision#is_biz}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}.

---

##### `reset_accept_data_use_terms` <a name="reset_accept_data_use_terms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```python
def reset_accept_data_use_terms() -> None
```

##### `reset_data_use_terms_version` <a name="reset_data_use_terms_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```python
def reset_data_use_terms_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_saas_params` <a name="reset_saas_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams"></a>

```python
def reset_saas_params() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineProjectProvision to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">accept_data_use_terms_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">data_use_terms_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput">saas_params_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `saas_params`<sup>Required</sup> <a name="saas_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams"></a>

```python
saas_params: GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `accept_data_use_terms_input`<sup>Optional</sup> <a name="accept_data_use_terms_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```python
accept_data_use_terms_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_use_terms_version_input`<sup>Optional</sup> <a name="data_use_terms_version_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```python
data_use_terms_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `saas_params_input`<sup>Optional</sup> <a name="saas_params_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```python
saas_params_input: GoogleDiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDiscoveryEngineProjectProvisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `accept_data_use_terms`<sup>Required</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```python
accept_data_use_terms: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `data_use_terms_version`<sup>Required</sup> <a name="data_use_terms_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```python
data_use_terms_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineProjectProvisionConfig <a name="GoogleDiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  accept_data_use_terms: bool | IResolvable = None,
  data_use_terms_version: str = None,
  id: str = None,
  location: str = None,
  project: str = None,
  saas_params: GoogleDiscoveryEngineProjectProvisionSaasParams = None,
  timeouts: GoogleDiscoveryEngineProjectProvisionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">accept_data_use_terms</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">data_use_terms_version</a></code> | <code>str</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location">location</a></code> | <code>str</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams">saas_params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `accept_data_use_terms`<sup>Optional</sup> <a name="accept_data_use_terms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```python
accept_data_use_terms: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `data_use_terms_version`<sup>Optional</sup> <a name="data_use_terms_version" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```python
data_use_terms_version: str
```

- *Type:* str

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `saas_params`<sup>Optional</sup> <a name="saas_params" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```python
saas_params: GoogleDiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineProjectProvisionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

### GoogleDiscoveryEngineProjectProvisionSaasParams <a name="GoogleDiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams(
  accept_biz_qos: bool | IResolvable = None,
  is_biz: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">accept_biz_qos</a></code> | <code>bool \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz">is_biz</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `accept_biz_qos`<sup>Optional</sup> <a name="accept_biz_qos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```python
accept_biz_qos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_biz_qos GoogleDiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `is_biz`<sup>Optional</sup> <a name="is_biz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```python
is_biz: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#is_biz GoogleDiscoveryEngineProjectProvision#is_biz}

---

### GoogleDiscoveryEngineProjectProvisionTimeouts <a name="GoogleDiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">reset_accept_biz_qos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">reset_is_biz</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accept_biz_qos` <a name="reset_accept_biz_qos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```python
def reset_accept_biz_qos() -> None
```

##### `reset_is_biz` <a name="reset_is_biz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```python
def reset_is_biz() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">accept_biz_qos_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">is_biz_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">accept_biz_qos</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">is_biz</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accept_biz_qos_input`<sup>Optional</sup> <a name="accept_biz_qos_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```python
accept_biz_qos_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_biz_input`<sup>Optional</sup> <a name="is_biz_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```python
is_biz_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `accept_biz_qos`<sup>Required</sup> <a name="accept_biz_qos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```python
accept_biz_qos: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_biz`<sup>Required</sup> <a name="is_biz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```python
is_biz: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineProjectProvisionSaasParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---


### GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_project_provision

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineProjectProvisionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---



