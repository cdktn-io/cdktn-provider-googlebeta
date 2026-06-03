# `googleVertexAiFeaturestoreEntitytypeFeature` Submodule <a name="`googleVertexAiFeaturestoreEntitytypeFeature` Submodule" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeature <a name="GoogleVertexAiFeaturestoreEntitytypeFeature" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature google_vertex_ai_featurestore_entitytype_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entitytype: str,
  value_type: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype">entitytype</a></code> | <code>str</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype"></a>

- *Type:* str

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#entitytype GoogleVertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType"></a>

- *Type:* str

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#value_type GoogleVertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#deletion_policy GoogleVertexAiFeaturestoreEntitytypeFeature#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description"></a>

- *Type:* str

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#description GoogleVertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#labels GoogleVertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name"></a>

- *Type:* str

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#name GoogleVertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#timeouts GoogleVertexAiFeaturestoreEntitytypeFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeaturestoreEntitytypeFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeaturestoreEntitytypeFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestoreEntitytypeFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput">entitytype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype">entitytype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `entitytype_input`<sup>Optional</sup> <a name="entitytype_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput"></a>

```python
entitytype_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype"></a>

```python
entitytype: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureConfig <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureConfig" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entitytype: str,
  value_type: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype">entitytype</a></code> | <code>str</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType">value_type</a></code> | <code>str</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description">description</a></code> | <code>str</code> | Description of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name">name</a></code> | <code>str</code> | The name of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype"></a>

```python
entitytype: str
```

- *Type:* str

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#entitytype GoogleVertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#value_type GoogleVertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#deletion_policy GoogleVertexAiFeaturestoreEntitytypeFeature#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#description GoogleVertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#labels GoogleVertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#name GoogleVertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#timeouts GoogleVertexAiFeaturestoreEntitytypeFeature#timeouts}

---

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_vertex_ai_featurestore_entitytype_feature

googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---



