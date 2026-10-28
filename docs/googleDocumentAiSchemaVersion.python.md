# `googleDocumentAiSchemaVersion` Submodule <a name="`googleDocumentAiSchemaVersion` Submodule" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiSchemaVersion <a name="GoogleDocumentAiSchemaVersion" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  schema: GoogleDocumentAiSchemaVersionSchema,
  schema_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDocumentAiSchemaVersionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schemaId">schema_id</a></code> | <code>str</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.displayName"></a>

- *Type:* str

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schemaId"></a>

- *Type:* str

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema">put_schema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_schema` <a name="put_schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema"></a>

```python
def put_schema(
  description: str = None,
  display_name: str = None,
  document_prompt: str = None,
  entity_types: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes] = None,
  metadata: GoogleDocumentAiSchemaVersionSchemaMetadata = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.description"></a>

- *Type:* str

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.displayName"></a>

- *Type:* str

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

###### `document_prompt`<sup>Optional</sup> <a name="document_prompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.documentPrompt"></a>

- *Type:* str

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

###### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.entityTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDocumentAiSchemaVersion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput">schema_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId">schema_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema"></a>

```python
schema: GoogleDocumentAiSchemaVersionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts"></a>

```python
timeouts: GoogleDocumentAiSchemaVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `schema_id_input`<sup>Optional</sup> <a name="schema_id_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput"></a>

```python
schema_id_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput"></a>

```python
schema_input: GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDocumentAiSchemaVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiSchemaVersionConfig <a name="GoogleDocumentAiSchemaVersionConfig" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  display_name: str,
  location: str,
  schema: GoogleDocumentAiSchemaVersionSchema,
  schema_id: str,
  deletion_policy: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDocumentAiSchemaVersionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId">schema_id</a></code> | <code>str</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema"></a>

```python
schema: GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `schema_id`<sup>Required</sup> <a name="schema_id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId"></a>

```python
schema_id: str
```

- *Type:* str

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts"></a>

```python
timeouts: GoogleDocumentAiSchemaVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

### GoogleDocumentAiSchemaVersionSchema <a name="GoogleDocumentAiSchemaVersionSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema(
  description: str = None,
  display_name: str = None,
  document_prompt: str = None,
  entity_types: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes] = None,
  metadata: GoogleDocumentAiSchemaVersionSchemaMetadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description">description</a></code> | <code>str</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName">display_name</a></code> | <code>str</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt">document_prompt</a></code> | <code>str</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes">entity_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `document_prompt`<sup>Optional</sup> <a name="document_prompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```python
document_prompt: str
```

- *Type:* str

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

##### `entity_types`<sup>Optional</sup> <a name="entity_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes"></a>

```python
entity_types: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata"></a>

```python
metadata: GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypes <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes(
  name: str,
  base_types: typing.List[str] = None,
  display_name: str = None,
  enum_values: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues = None,
  properties: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name">name</a></code> | <code>str</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">base_types</a></code> | <code>typing.List[str]</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName">display_name</a></code> | <code>str</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">enum_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties">properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | properties block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `base_types`<sup>Optional</sup> <a name="base_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```python
base_types: typing.List[str]
```

- *Type:* typing.List[str]

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#base_types GoogleDocumentAiSchemaVersion#base_types}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `enum_values`<sup>Optional</sup> <a name="enum_values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```python
enum_values: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#enum_values GoogleDocumentAiSchemaVersion#enum_values}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```python
properties: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#properties GoogleDocumentAiSchemaVersion#properties}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues(
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">values</a></code> | <code>typing.List[str]</code> | The individual values that this enum values type can include. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties(
  name: str,
  value_type: str,
  display_name: str = None,
  method: str = None,
  occurrence_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">name</a></code> | <code>str</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">value_type</a></code> | <code>str</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">display_name</a></code> | <code>str</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">method</a></code> | <code>str</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">occurrence_type</a></code> | <code>str</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#value_type GoogleDocumentAiSchemaVersion#value_type}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```python
method: str
```

- *Type:* str

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#method GoogleDocumentAiSchemaVersion#method}

---

##### `occurrence_type`<sup>Optional</sup> <a name="occurrence_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```python
occurrence_type: str
```

- *Type:* str

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#occurrence_type GoogleDocumentAiSchemaVersion#occurrence_type}

---

### GoogleDocumentAiSchemaVersionSchemaMetadata <a name="GoogleDocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata(
  document_allow_multiple_labels: bool | IResolvable = None,
  document_splitter: bool | IResolvable = None,
  prefixed_naming_on_properties: bool | IResolvable = None,
  skip_naming_validation: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">document_allow_multiple_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">document_splitter</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">prefixed_naming_on_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">skip_naming_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `document_allow_multiple_labels`<sup>Optional</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```python
document_allow_multiple_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `document_splitter`<sup>Optional</sup> <a name="document_splitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```python
document_splitter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

##### `prefixed_naming_on_properties`<sup>Optional</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```python
prefixed_naming_on_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `skip_naming_validation`<sup>Optional</sup> <a name="skip_naming_validation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```python
skip_naming_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

### GoogleDocumentAiSchemaVersionTimeouts <a name="GoogleDocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">put_enum_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">reset_base_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">reset_enum_values</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_enum_values` <a name="put_enum_values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```python
def put_enum_values(
  values: typing.List[str] = None
) -> None
```

###### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.values"></a>

- *Type:* typing.List[str]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```python
def put_properties(
  value: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---

##### `reset_base_types` <a name="reset_base_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```python
def reset_base_types() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enum_values` <a name="reset_enum_values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```python
def reset_enum_values() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">enum_values</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">base_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">enum_values_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">base_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enum_values`<sup>Required</sup> <a name="enum_values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```python
enum_values: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```python
properties: GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `base_types_input`<sup>Optional</sup> <a name="base_types_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```python
base_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enum_values_input`<sup>Optional</sup> <a name="enum_values_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```python
enum_values_input: GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```python
properties_input: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---

##### `base_types`<sup>Required</sup> <a name="base_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```python
base_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>]

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">reset_occurrence_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_occurrence_type` <a name="reset_occurrence_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```python
def reset_occurrence_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">occurrence_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">occurrence_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `occurrence_type_input`<sup>Optional</sup> <a name="occurrence_type_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```python
occurrence_type_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `occurrence_type`<sup>Required</sup> <a name="occurrence_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```python
occurrence_type: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">reset_document_allow_multiple_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">reset_document_splitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">reset_prefixed_naming_on_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">reset_skip_naming_validation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_document_allow_multiple_labels` <a name="reset_document_allow_multiple_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```python
def reset_document_allow_multiple_labels() -> None
```

##### `reset_document_splitter` <a name="reset_document_splitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```python
def reset_document_splitter() -> None
```

##### `reset_prefixed_naming_on_properties` <a name="reset_prefixed_naming_on_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```python
def reset_prefixed_naming_on_properties() -> None
```

##### `reset_skip_naming_validation` <a name="reset_skip_naming_validation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```python
def reset_skip_naming_validation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">document_allow_multiple_labels_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">document_splitter_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">prefixed_naming_on_properties_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">skip_naming_validation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">document_allow_multiple_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">document_splitter</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">prefixed_naming_on_properties</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">skip_naming_validation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_allow_multiple_labels_input`<sup>Optional</sup> <a name="document_allow_multiple_labels_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```python
document_allow_multiple_labels_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_splitter_input`<sup>Optional</sup> <a name="document_splitter_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```python
document_splitter_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefixed_naming_on_properties_input`<sup>Optional</sup> <a name="prefixed_naming_on_properties_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```python
prefixed_naming_on_properties_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_naming_validation_input`<sup>Optional</sup> <a name="skip_naming_validation_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```python
skip_naming_validation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_allow_multiple_labels`<sup>Required</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```python
document_allow_multiple_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `document_splitter`<sup>Required</sup> <a name="document_splitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```python
document_splitter: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefixed_naming_on_properties`<sup>Required</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```python
prefixed_naming_on_properties: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `skip_naming_validation`<sup>Required</sup> <a name="skip_naming_validation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```python
skip_naming_validation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---


### GoogleDocumentAiSchemaVersionSchemaOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">put_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">reset_document_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">reset_entity_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_entity_types` <a name="put_entity_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```python
def put_entity_types(
  value: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```python
def put_metadata(
  document_allow_multiple_labels: bool | IResolvable = None,
  document_splitter: bool | IResolvable = None,
  prefixed_naming_on_properties: bool | IResolvable = None,
  skip_naming_validation: bool | IResolvable = None
) -> None
```

###### `document_allow_multiple_labels`<sup>Optional</sup> <a name="document_allow_multiple_labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.documentAllowMultipleLabels"></a>

- *Type:* bool | cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

###### `document_splitter`<sup>Optional</sup> <a name="document_splitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.documentSplitter"></a>

- *Type:* bool | cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

###### `prefixed_naming_on_properties`<sup>Optional</sup> <a name="prefixed_naming_on_properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.prefixedNamingOnProperties"></a>

- *Type:* bool | cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

###### `skip_naming_validation`<sup>Optional</sup> <a name="skip_naming_validation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.skipNamingValidation"></a>

- *Type:* bool | cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_document_prompt` <a name="reset_document_prompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```python
def reset_document_prompt() -> None
```

##### `reset_entity_types` <a name="reset_entity_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```python
def reset_entity_types() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">entity_types</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">document_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">entity_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">document_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_types`<sup>Required</sup> <a name="entity_types" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```python
entity_types: GoogleDocumentAiSchemaVersionSchemaEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```python
metadata: GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `document_prompt_input`<sup>Optional</sup> <a name="document_prompt_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```python
document_prompt_input: str
```

- *Type:* str

---

##### `entity_types_input`<sup>Optional</sup> <a name="entity_types_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```python
entity_types_input: IResolvable | typing.List[GoogleDocumentAiSchemaVersionSchemaEntityTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```python
metadata_input: GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `document_prompt`<sup>Required</sup> <a name="document_prompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```python
document_prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---


### GoogleDocumentAiSchemaVersionTimeoutsOutputReference <a name="GoogleDocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_document_ai_schema_version

googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDocumentAiSchemaVersionTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---



