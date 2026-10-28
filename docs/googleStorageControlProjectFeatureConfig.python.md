# `googleStorageControlProjectFeatureConfig` Submodule <a name="`googleStorageControlProjectFeatureConfig` Submodule" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlProjectFeatureConfig <a name="GoogleStorageControlProjectFeatureConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config google_storage_control_project_feature_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_annotate_config: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig,
  feature_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  filter: GoogleStorageControlProjectFeatureConfigFilter = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleStorageControlProjectFeatureConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.autoAnnotateConfig">auto_annotate_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | auto_annotate_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.featureConfigId">feature_config_id</a></code> | <code>str</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the feature configuration. The description can be up to 256 characters long. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_annotate_config`<sup>Required</sup> <a name="auto_annotate_config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.autoAnnotateConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

auto_annotate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}

---

##### `feature_config_id`<sup>Required</sup> <a name="feature_config_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.featureConfigId"></a>

- *Type:* str

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.description"></a>

- *Type:* str

A description of the feature configuration. The description can be up to 256 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig">put_auto_annotate_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_annotate_config` <a name="put_auto_annotate_config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig"></a>

```python
def put_auto_annotate_config(
  models: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels],
  processing_location: str
) -> None
```

###### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig.parameter.models"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]

models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}

---

###### `processing_location`<sup>Required</sup> <a name="processing_location" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putAutoAnnotateConfig.parameter.processingLocation"></a>

- *Type:* str

The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported.

To avoid duplicate billing, configure exactly one processing location for each bucket
and model combination. If you configure multiple processing locations for the same
bucket and model across different feature configurations, a separate annotation run is
triggered in each location, and you're billed for each resulting annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}

---

##### `put_filter` <a name="put_filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter"></a>

```python
def put_filter(
  included_cloud_storage_buckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
) -> None
```

###### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putFilter.parameter.includedCloudStorageBuckets"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleStorageControlProjectFeatureConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleStorageControlProjectFeatureConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleStorageControlProjectFeatureConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlProjectFeatureConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig">auto_annotate_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput">auto_annotate_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput">feature_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput">filter_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId">feature_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_annotate_config`<sup>Required</sup> <a name="auto_annotate_config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfig"></a>

```python
auto_annotate_config: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filter"></a>

```python
filter: GoogleStorageControlProjectFeatureConfigFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference">GoogleStorageControlProjectFeatureConfigFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference">GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `auto_annotate_config_input`<sup>Optional</sup> <a name="auto_annotate_config_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.autoAnnotateConfigInput"></a>

```python
auto_annotate_config_input: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `feature_config_id_input`<sup>Optional</sup> <a name="feature_config_id_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigIdInput"></a>

```python
feature_config_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.filterInput"></a>

```python
filter_input: GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleStorageControlProjectFeatureConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `feature_config_id`<sup>Required</sup> <a name="feature_config_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.featureConfigId"></a>

```python
feature_config_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig(
  models: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels],
  processing_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models">models</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]</code> | models block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation">processing_location</a></code> | <code>str</code> | The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported. |

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.models"></a>

```python
models: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]

models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#models GoogleStorageControlProjectFeatureConfig#models}

---

##### `processing_location`<sup>Required</sup> <a name="processing_location" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig.property.processingLocation"></a>

```python
processing_location: str
```

- *Type:* str

The geographic location (case-sensitive) where data is processed. Currently, only multi-region locations such as 'us', 'eu', or 'asia' are supported.

To avoid duplicate billing, configure exactly one processing location for each bucket
and model combination. If you configure multiple processing locations for the same
bucket and model across different feature configurations, a separate annotation run is
triggered in each location, and you're billed for each resulting annotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#processing_location GoogleStorageControlProjectFeatureConfig#processing_location}

---

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name">name</a></code> | <code>str</code> | The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the model. Supported values include 'face-detector', 'object-detector', 'label-detector', and 'content-safety'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#name GoogleStorageControlProjectFeatureConfig#name}

---

### GoogleStorageControlProjectFeatureConfigConfig <a name="GoogleStorageControlProjectFeatureConfigConfig" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  auto_annotate_config: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig,
  feature_config_id: str,
  deletion_policy: str = None,
  description: str = None,
  filter: GoogleStorageControlProjectFeatureConfigFilter = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleStorageControlProjectFeatureConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig">auto_annotate_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | auto_annotate_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId">feature_config_id</a></code> | <code>str</code> | The ID of the feature configuration, which becomes the final component of its resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description">description</a></code> | <code>str</code> | A description of the feature configuration. The description can be up to 256 characters long. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_annotate_config`<sup>Required</sup> <a name="auto_annotate_config" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.autoAnnotateConfig"></a>

```python
auto_annotate_config: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

auto_annotate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#auto_annotate_config GoogleStorageControlProjectFeatureConfig#auto_annotate_config}

---

##### `feature_config_id`<sup>Required</sup> <a name="feature_config_id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.featureConfigId"></a>

```python
feature_config_id: str
```

- *Type:* str

The ID of the feature configuration, which becomes the final component of its resource name.

The ID must be 1 to 63 characters long, start with a lowercase letter, and contain only
lowercase letters, digits, and dashes. The last character can't be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#feature_config_id GoogleStorageControlProjectFeatureConfig#feature_config_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#deletion_policy GoogleStorageControlProjectFeatureConfig#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the feature configuration. The description can be up to 256 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#description GoogleStorageControlProjectFeatureConfig#description}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.filter"></a>

```python
filter: GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#filter GoogleStorageControlProjectFeatureConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#id GoogleStorageControlProjectFeatureConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#project GoogleStorageControlProjectFeatureConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleStorageControlProjectFeatureConfigTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#timeouts GoogleStorageControlProjectFeatureConfig#timeouts}

---

### GoogleStorageControlProjectFeatureConfigFilter <a name="GoogleStorageControlProjectFeatureConfigFilter" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter(
  included_cloud_storage_buckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#included_cloud_storage_buckets GoogleStorageControlProjectFeatureConfig#included_cloud_storage_buckets}

---

### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets(
  bucket_id_regexes: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | The names of the buckets to include. |

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

The names of the buckets to include.

For Auto Annotate, regex wildcards aren't
supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
must already exist in the feature configuration's project. Up to 1,000 buckets can
be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}

---

### GoogleStorageControlProjectFeatureConfigTimeouts <a name="GoogleStorageControlProjectFeatureConfigTimeouts" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#create GoogleStorageControlProjectFeatureConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#delete GoogleStorageControlProjectFeatureConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#update GoogleStorageControlProjectFeatureConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>

---


### GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference <a name="GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels">put_models</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_models` <a name="put_models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels"></a>

```python
def put_models(
  value: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.putModels.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models">models</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput">models_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput">processing_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation">processing_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `models`<sup>Required</sup> <a name="models" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.models"></a>

```python
models: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModelsList</a>

---

##### `models_input`<sup>Optional</sup> <a name="models_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.modelsInput"></a>

```python
models_input: IResolvable | typing.List[GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigModels</a>]

---

##### `processing_location_input`<sup>Optional</sup> <a name="processing_location_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocationInput"></a>

```python
processing_location_input: str
```

- *Type:* str

---

##### `processing_location`<sup>Required</sup> <a name="processing_location" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.processingLocation"></a>

```python
processing_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig">GoogleStorageControlProjectFeatureConfigAutoAnnotateConfig</a>

---


### GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">bucket_id_regexes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">bucket_id_regexes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_id_regexes_input`<sup>Optional</sup> <a name="bucket_id_regexes_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```python
bucket_id_regexes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```python
bucket_id_regexes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlProjectFeatureConfigFilterOutputReference <a name="GoogleStorageControlProjectFeatureConfigFilterOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets">put_included_cloud_storage_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_included_cloud_storage_buckets` <a name="put_included_cloud_storage_buckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```python
def put_included_cloud_storage_buckets(
  bucket_id_regexes: typing.List[str]
) -> None
```

###### `bucket_id_regexes`<sup>Required</sup> <a name="bucket_id_regexes" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.bucketIdRegexes"></a>

- *Type:* typing.List[str]

The names of the buckets to include.

For Auto Annotate, regex wildcards aren't
supported, so specify exact bucket names (for example, 'my-bucket'). Each bucket
must already exist in the feature configuration's project. Up to 1,000 buckets can
be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_storage_control_project_feature_config#bucket_id_regexes GoogleStorageControlProjectFeatureConfig#bucket_id_regexes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets">included_cloud_storage_buckets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput">included_cloud_storage_buckets_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `included_cloud_storage_buckets`<sup>Required</sup> <a name="included_cloud_storage_buckets" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```python
included_cloud_storage_buckets: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `included_cloud_storage_buckets_input`<sup>Optional</sup> <a name="included_cloud_storage_buckets_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```python
included_cloud_storage_buckets_input: GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlProjectFeatureConfigFilterIncludedCloudStorageBuckets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleStorageControlProjectFeatureConfigFilter
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigFilter">GoogleStorageControlProjectFeatureConfigFilter</a>

---


### GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference <a name="GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_storage_control_project_feature_config

googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleStorageControlProjectFeatureConfigTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleStorageControlProjectFeatureConfig.GoogleStorageControlProjectFeatureConfigTimeouts">GoogleStorageControlProjectFeatureConfigTimeouts</a>

---



