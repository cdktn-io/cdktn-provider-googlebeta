# `googleArtifactRegistryRule` Submodule <a name="`googleArtifactRegistryRule` Submodule" id="@cdktn/provider-google-beta.googleArtifactRegistryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRule <a name="GoogleArtifactRegistryRule" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule google_artifact_registry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRule(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_id: str,
  rule_id: str,
  action: str = None,
  condition: GoogleArtifactRegistryRuleCondition = None,
  deletion_policy: str = None,
  id: str = None,
  location: str = None,
  operation: str = None,
  package_id: str = None,
  project: str = None,
  timeouts: GoogleArtifactRegistryRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | The rule id to use for this repository. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#id GoogleArtifactRegistryRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the repository's location. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.operation">operation</a></code> | <code>str</code> | The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.packageId">package_id</a></code> | <code>str</code> | The package ID the rule applies to. If empty, this rule applies to all packages inside the repository. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#project GoogleArtifactRegistryRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.repositoryId"></a>

- *Type:* str

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#repository_id GoogleArtifactRegistryRule#repository_id}

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.ruleId"></a>

- *Type:* str

The rule id to use for this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#rule_id GoogleArtifactRegistryRule#rule_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.action"></a>

- *Type:* str

The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#action GoogleArtifactRegistryRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#condition GoogleArtifactRegistryRule#condition}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#deletion_policy GoogleArtifactRegistryRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#id GoogleArtifactRegistryRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.location"></a>

- *Type:* str

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#location GoogleArtifactRegistryRule#location}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.operation"></a>

- *Type:* str

The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#operation GoogleArtifactRegistryRule#operation}

---

##### `package_id`<sup>Optional</sup> <a name="package_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.packageId"></a>

- *Type:* str

The package ID the rule applies to. If empty, this rule applies to all packages inside the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#package_id GoogleArtifactRegistryRule#package_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#project GoogleArtifactRegistryRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#timeouts GoogleArtifactRegistryRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetPackageId">reset_package_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#expression GoogleArtifactRegistryRule#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#description GoogleArtifactRegistryRule#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#location GoogleArtifactRegistryRule#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putCondition.parameter.title"></a>

- *Type:* str

Optional. Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#title GoogleArtifactRegistryRule#title}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#create GoogleArtifactRegistryRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#delete GoogleArtifactRegistryRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#update GoogleArtifactRegistryRule#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_operation` <a name="reset_operation" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_package_id` <a name="reset_package_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetPackageId"></a>

```python
def reset_package_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleArtifactRegistryRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleArtifactRegistryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleArtifactRegistryRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleArtifactRegistryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference">GoogleArtifactRegistryRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference">GoogleArtifactRegistryRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.packageIdInput">package_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.packageId">package_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.condition"></a>

```python
condition: GoogleArtifactRegistryRuleConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference">GoogleArtifactRegistryRuleConditionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference">GoogleArtifactRegistryRuleTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.conditionInput"></a>

```python
condition_input: GoogleArtifactRegistryRuleCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `package_id_input`<sup>Optional</sup> <a name="package_id_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.packageIdInput"></a>

```python
package_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleArtifactRegistryRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `package_id`<sup>Required</sup> <a name="package_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRuleCondition <a name="GoogleArtifactRegistryRuleCondition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.title">title</a></code> | <code>str</code> | Optional. Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#expression GoogleArtifactRegistryRule#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which
describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#description GoogleArtifactRegistryRule#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error
reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#location GoogleArtifactRegistryRule#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional. Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#title GoogleArtifactRegistryRule#title}

---

### GoogleArtifactRegistryRuleConfig <a name="GoogleArtifactRegistryRuleConfig" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  repository_id: str,
  rule_id: str,
  action: str = None,
  condition: GoogleArtifactRegistryRuleCondition = None,
  deletion_policy: str = None,
  id: str = None,
  location: str = None,
  operation: str = None,
  package_id: str = None,
  project: str = None,
  timeouts: GoogleArtifactRegistryRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.ruleId">rule_id</a></code> | <code>str</code> | The rule id to use for this repository. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.action">action</a></code> | <code>str</code> | The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#id GoogleArtifactRegistryRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.location">location</a></code> | <code>str</code> | The name of the repository's location. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.operation">operation</a></code> | <code>str</code> | The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.packageId">package_id</a></code> | <code>str</code> | The package ID the rule applies to. If empty, this rule applies to all packages inside the repository. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#project GoogleArtifactRegistryRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#repository_id GoogleArtifactRegistryRule#repository_id}

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

The rule id to use for this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#rule_id GoogleArtifactRegistryRule#rule_id}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action this rule takes. Possible values: ["ACTION_UNSPECIFIED", "ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#action GoogleArtifactRegistryRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.condition"></a>

```python
condition: GoogleArtifactRegistryRuleCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#condition GoogleArtifactRegistryRule#condition}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#deletion_policy GoogleArtifactRegistryRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#id GoogleArtifactRegistryRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#location GoogleArtifactRegistryRule#location}

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.operation"></a>

```python
operation: str
```

- *Type:* str

The operation the rule applies to. Possible values: ["OPERATION_UNSPECIFIED", "DOWNLOAD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#operation GoogleArtifactRegistryRule#operation}

---

##### `package_id`<sup>Optional</sup> <a name="package_id" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.packageId"></a>

```python
package_id: str
```

- *Type:* str

The package ID the rule applies to. If empty, this rule applies to all packages inside the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#package_id GoogleArtifactRegistryRule#package_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#project GoogleArtifactRegistryRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryRuleTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#timeouts GoogleArtifactRegistryRule#timeouts}

---

### GoogleArtifactRegistryRuleTimeouts <a name="GoogleArtifactRegistryRuleTimeouts" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#create GoogleArtifactRegistryRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#delete GoogleArtifactRegistryRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#update GoogleArtifactRegistryRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#create GoogleArtifactRegistryRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#delete GoogleArtifactRegistryRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_artifact_registry_rule#update GoogleArtifactRegistryRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryRuleConditionOutputReference <a name="GoogleArtifactRegistryRuleConditionOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRuleCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleCondition">GoogleArtifactRegistryRuleCondition</a>

---


### GoogleArtifactRegistryRuleTimeoutsOutputReference <a name="GoogleArtifactRegistryRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_artifact_registry_rule

googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleArtifactRegistryRuleTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleArtifactRegistryRule.GoogleArtifactRegistryRuleTimeouts">GoogleArtifactRegistryRuleTimeouts</a>

---



