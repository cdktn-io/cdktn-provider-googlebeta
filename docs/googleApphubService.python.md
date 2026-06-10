# `googleApphubService` Submodule <a name="`googleApphubService` Submodule" id="@cdktn/provider-google-beta.googleApphubService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApphubService <a name="GoogleApphubService" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service google_apphub_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubService(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  discovered_service: str,
  location: str,
  service_id: str,
  attributes: GoogleApphubServiceAttributes = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApphubServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.discoveredService">discovered_service</a></code> | <code>str</code> | Immutable. The resource name of the original discovered service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The Service identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.description">description</a></code> | <code>str</code> | User-defined description of a Service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-defined name for the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#id GoogleApphubService#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#project GoogleApphubService#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.applicationId"></a>

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#application_id GoogleApphubService#application_id}

---

##### `discovered_service`<sup>Required</sup> <a name="discovered_service" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.discoveredService"></a>

- *Type:* str

Immutable. The resource name of the original discovered service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#discovered_service GoogleApphubService#discovered_service}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#location GoogleApphubService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.serviceId"></a>

- *Type:* str

The Service identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#service_id GoogleApphubService#service_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#attributes GoogleApphubService#attributes}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#deletion_policy GoogleApphubService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.description"></a>

- *Type:* str

User-defined description of a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#description GoogleApphubService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.displayName"></a>

- *Type:* str

User-defined name for the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#display_name GoogleApphubService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#id GoogleApphubService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#project GoogleApphubService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#timeouts GoogleApphubService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes"></a>

```python
def put_attributes(
  business_owners: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners] = None,
  criticality: GoogleApphubServiceAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners] = None,
  environment: GoogleApphubServiceAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners] = None
) -> None
```

###### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes.parameter.businessOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#business_owners GoogleApphubService#business_owners}

---

###### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes.parameter.criticality"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#criticality GoogleApphubService#criticality}

---

###### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes.parameter.developerOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#developer_owners GoogleApphubService#developer_owners}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes.parameter.environment"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#environment GoogleApphubService#environment}

---

###### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putAttributes.parameter.operatorOwners"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#operator_owners GoogleApphubService#operator_owners}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#create GoogleApphubService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#delete GoogleApphubService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#update GoogleApphubService#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleApphubService resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleApphubService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApphubService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApphubService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApphubService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference">GoogleApphubServiceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceProperties">service_properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList">GoogleApphubServiceServicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceReference">service_reference</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList">GoogleApphubServiceServiceReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference">GoogleApphubServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.attributesInput">attributes_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.discoveredServiceInput">discovered_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.discoveredService">discovered_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.attributes"></a>

```python
attributes: GoogleApphubServiceAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference">GoogleApphubServiceAttributesOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_properties`<sup>Required</sup> <a name="service_properties" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceProperties"></a>

```python
service_properties: GoogleApphubServiceServicePropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList">GoogleApphubServiceServicePropertiesList</a>

---

##### `service_reference`<sup>Required</sup> <a name="service_reference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceReference"></a>

```python
service_reference: GoogleApphubServiceServiceReferenceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList">GoogleApphubServiceServiceReferenceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.timeouts"></a>

```python
timeouts: GoogleApphubServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference">GoogleApphubServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.attributesInput"></a>

```python
attributes_input: GoogleApphubServiceAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovered_service_input`<sup>Optional</sup> <a name="discovered_service_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.discoveredServiceInput"></a>

```python
discovered_service_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleApphubServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a>

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovered_service`<sup>Required</sup> <a name="discovered_service" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.discoveredService"></a>

```python
discovered_service: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApphubServiceAttributes <a name="GoogleApphubServiceAttributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributes(
  business_owners: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners] = None,
  criticality: GoogleApphubServiceAttributesCriticality = None,
  developer_owners: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners] = None,
  environment: GoogleApphubServiceAttributesEnvironment = None,
  operator_owners: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.businessOwners">business_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]</code> | business_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.developerOwners">developer_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]</code> | developer_owners block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.operatorOwners">operator_owners</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]</code> | operator_owners block. |

---

##### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.businessOwners"></a>

```python
business_owners: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#business_owners GoogleApphubService#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.criticality"></a>

```python
criticality: GoogleApphubServiceAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#criticality GoogleApphubService#criticality}

---

##### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.developerOwners"></a>

```python
developer_owners: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#developer_owners GoogleApphubService#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.environment"></a>

```python
environment: GoogleApphubServiceAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#environment GoogleApphubService#environment}

---

##### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes.property.operatorOwners"></a>

```python
operator_owners: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#operator_owners GoogleApphubService#operator_owners}

---

### GoogleApphubServiceAttributesBusinessOwners <a name="GoogleApphubServiceAttributesBusinessOwners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesBusinessOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#email GoogleApphubService#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#display_name GoogleApphubService#display_name}

---

### GoogleApphubServiceAttributesCriticality <a name="GoogleApphubServiceAttributesCriticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesCriticality(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality.property.type">type</a></code> | <code>str</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality.property.type"></a>

```python
type: str
```

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#type GoogleApphubService#type}

---

### GoogleApphubServiceAttributesDeveloperOwners <a name="GoogleApphubServiceAttributesDeveloperOwners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesDeveloperOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#email GoogleApphubService#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#display_name GoogleApphubService#display_name}

---

### GoogleApphubServiceAttributesEnvironment <a name="GoogleApphubServiceAttributesEnvironment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesEnvironment(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment.property.type">type</a></code> | <code>str</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#type GoogleApphubService#type}

---

### GoogleApphubServiceAttributesOperatorOwners <a name="GoogleApphubServiceAttributesOperatorOwners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesOperatorOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners.property.displayName">display_name</a></code> | <code>str</code> | Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#email GoogleApphubService#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#display_name GoogleApphubService#display_name}

---

### GoogleApphubServiceConfig <a name="GoogleApphubServiceConfig" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  discovered_service: str,
  location: str,
  service_id: str,
  attributes: GoogleApphubServiceAttributes = None,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApphubServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.applicationId">application_id</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.discoveredService">discovered_service</a></code> | <code>str</code> | Immutable. The resource name of the original discovered service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | The Service identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a></code> | attributes block. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.description">description</a></code> | <code>str</code> | User-defined description of a Service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-defined name for the Service. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#id GoogleApphubService#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#project GoogleApphubService#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#application_id GoogleApphubService#application_id}

---

##### `discovered_service`<sup>Required</sup> <a name="discovered_service" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.discoveredService"></a>

```python
discovered_service: str
```

- *Type:* str

Immutable. The resource name of the original discovered service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#discovered_service GoogleApphubService#discovered_service}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'.  Full resource name of a parent Application. Example: projects/{HOST_PROJECT_ID}/locations/{LOCATION}/applications/{APPLICATION_ID}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#location GoogleApphubService#location}

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The Service identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#service_id GoogleApphubService#service_id}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.attributes"></a>

```python
attributes: GoogleApphubServiceAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#attributes GoogleApphubService#attributes}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#deletion_policy GoogleApphubService#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-defined description of a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#description GoogleApphubService#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-defined name for the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#display_name GoogleApphubService#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#id GoogleApphubService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#project GoogleApphubService#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceConfig.property.timeouts"></a>

```python
timeouts: GoogleApphubServiceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#timeouts GoogleApphubService#timeouts}

---

### GoogleApphubServiceServiceProperties <a name="GoogleApphubServiceServiceProperties" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceProperties.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServiceProperties()
```


### GoogleApphubServiceServicePropertiesExtendedMetadata <a name="GoogleApphubServiceServicePropertiesExtendedMetadata" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadata.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadata()
```


### GoogleApphubServiceServicePropertiesExtendedMetadataValue <a name="GoogleApphubServiceServicePropertiesExtendedMetadataValue" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValue.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValue()
```


### GoogleApphubServiceServicePropertiesFunctionalType <a name="GoogleApphubServiceServicePropertiesFunctionalType" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalType.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesFunctionalType()
```


### GoogleApphubServiceServicePropertiesIdentity <a name="GoogleApphubServiceServicePropertiesIdentity" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentity.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesIdentity()
```


### GoogleApphubServiceServicePropertiesRegistrationType <a name="GoogleApphubServiceServicePropertiesRegistrationType" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationType.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesRegistrationType()
```


### GoogleApphubServiceServiceReference <a name="GoogleApphubServiceServiceReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServiceReference()
```


### GoogleApphubServiceTimeouts <a name="GoogleApphubServiceTimeouts" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#create GoogleApphubService#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#delete GoogleApphubService#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#update GoogleApphubService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#create GoogleApphubService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#delete GoogleApphubService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#update GoogleApphubService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApphubServiceAttributesBusinessOwnersList <a name="GoogleApphubServiceAttributesBusinessOwnersList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]

---


### GoogleApphubServiceAttributesBusinessOwnersOutputReference <a name="GoogleApphubServiceAttributesBusinessOwnersOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApphubServiceAttributesBusinessOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>

---


### GoogleApphubServiceAttributesCriticalityOutputReference <a name="GoogleApphubServiceAttributesCriticalityOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a>

---


### GoogleApphubServiceAttributesDeveloperOwnersList <a name="GoogleApphubServiceAttributesDeveloperOwnersList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]

---


### GoogleApphubServiceAttributesDeveloperOwnersOutputReference <a name="GoogleApphubServiceAttributesDeveloperOwnersOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApphubServiceAttributesDeveloperOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>

---


### GoogleApphubServiceAttributesEnvironmentOutputReference <a name="GoogleApphubServiceAttributesEnvironmentOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a>

---


### GoogleApphubServiceAttributesOperatorOwnersList <a name="GoogleApphubServiceAttributesOperatorOwnersList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]

---


### GoogleApphubServiceAttributesOperatorOwnersOutputReference <a name="GoogleApphubServiceAttributesOperatorOwnersOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApphubServiceAttributesOperatorOwners
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>

---


### GoogleApphubServiceAttributesOutputReference <a name="GoogleApphubServiceAttributesOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putBusinessOwners">put_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putCriticality">put_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putDeveloperOwners">put_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putOperatorOwners">put_operator_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetBusinessOwners">reset_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetCriticality">reset_criticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetDeveloperOwners">reset_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetOperatorOwners">reset_operator_owners</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_business_owners` <a name="put_business_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putBusinessOwners"></a>

```python
def put_business_owners(
  value: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]

---

##### `put_criticality` <a name="put_criticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putCriticality"></a>

```python
def put_criticality(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putCriticality.parameter.type"></a>

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#type GoogleApphubService#type}

---

##### `put_developer_owners` <a name="put_developer_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putDeveloperOwners"></a>

```python
def put_developer_owners(
  value: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]

---

##### `put_environment` <a name="put_environment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putEnvironment"></a>

```python
def put_environment(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putEnvironment.parameter.type"></a>

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_apphub_service#type GoogleApphubService#type}

---

##### `put_operator_owners` <a name="put_operator_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putOperatorOwners"></a>

```python
def put_operator_owners(
  value: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]

---

##### `reset_business_owners` <a name="reset_business_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetBusinessOwners"></a>

```python
def reset_business_owners() -> None
```

##### `reset_criticality` <a name="reset_criticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetCriticality"></a>

```python
def reset_criticality() -> None
```

##### `reset_developer_owners` <a name="reset_developer_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetDeveloperOwners"></a>

```python
def reset_developer_owners() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_operator_owners` <a name="reset_operator_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.resetOperatorOwners"></a>

```python
def reset_operator_owners() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.businessOwners">business_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList">GoogleApphubServiceAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference">GoogleApphubServiceAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.developerOwners">developer_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList">GoogleApphubServiceAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference">GoogleApphubServiceAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.operatorOwners">operator_owners</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList">GoogleApphubServiceAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.businessOwnersInput">business_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.criticalityInput">criticality_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.developerOwnersInput">developer_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.operatorOwnersInput">operator_owners_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_owners`<sup>Required</sup> <a name="business_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.businessOwners"></a>

```python
business_owners: GoogleApphubServiceAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwnersList">GoogleApphubServiceAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.criticality"></a>

```python
criticality: GoogleApphubServiceAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticalityOutputReference">GoogleApphubServiceAttributesCriticalityOutputReference</a>

---

##### `developer_owners`<sup>Required</sup> <a name="developer_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.developerOwners"></a>

```python
developer_owners: GoogleApphubServiceAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwnersList">GoogleApphubServiceAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.environment"></a>

```python
environment: GoogleApphubServiceAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironmentOutputReference">GoogleApphubServiceAttributesEnvironmentOutputReference</a>

---

##### `operator_owners`<sup>Required</sup> <a name="operator_owners" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.operatorOwners"></a>

```python
operator_owners: GoogleApphubServiceAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwnersList">GoogleApphubServiceAttributesOperatorOwnersList</a>

---

##### `business_owners_input`<sup>Optional</sup> <a name="business_owners_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.businessOwnersInput"></a>

```python
business_owners_input: IResolvable | typing.List[GoogleApphubServiceAttributesBusinessOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesBusinessOwners">GoogleApphubServiceAttributesBusinessOwners</a>]

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.criticalityInput"></a>

```python
criticality_input: GoogleApphubServiceAttributesCriticality
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesCriticality">GoogleApphubServiceAttributesCriticality</a>

---

##### `developer_owners_input`<sup>Optional</sup> <a name="developer_owners_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.developerOwnersInput"></a>

```python
developer_owners_input: IResolvable | typing.List[GoogleApphubServiceAttributesDeveloperOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesDeveloperOwners">GoogleApphubServiceAttributesDeveloperOwners</a>]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.environmentInput"></a>

```python
environment_input: GoogleApphubServiceAttributesEnvironment
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesEnvironment">GoogleApphubServiceAttributesEnvironment</a>

---

##### `operator_owners_input`<sup>Optional</sup> <a name="operator_owners_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.operatorOwnersInput"></a>

```python
operator_owners_input: IResolvable | typing.List[GoogleApphubServiceAttributesOperatorOwners]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOperatorOwners">GoogleApphubServiceAttributesOperatorOwners</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceAttributes
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceAttributes">GoogleApphubServiceAttributes</a>

---


### GoogleApphubServiceServicePropertiesExtendedMetadataList <a name="GoogleApphubServiceServicePropertiesExtendedMetadataList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference <a name="GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList">GoogleApphubServiceServicePropertiesExtendedMetadataValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadata">GoogleApphubServiceServicePropertiesExtendedMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.value"></a>

```python
value: GoogleApphubServiceServicePropertiesExtendedMetadataValueList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList">GoogleApphubServiceServicePropertiesExtendedMetadataValueList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServicePropertiesExtendedMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadata">GoogleApphubServiceServicePropertiesExtendedMetadata</a>

---


### GoogleApphubServiceServicePropertiesExtendedMetadataValueList <a name="GoogleApphubServiceServicePropertiesExtendedMetadataValueList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference <a name="GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema">extended_metadata_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.metadataStruct">metadata_struct</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValue">GoogleApphubServiceServicePropertiesExtendedMetadataValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extended_metadata_schema`<sup>Required</sup> <a name="extended_metadata_schema" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.extendedMetadataSchema"></a>

```python
extended_metadata_schema: str
```

- *Type:* str

---

##### `metadata_struct`<sup>Required</sup> <a name="metadata_struct" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.metadataStruct"></a>

```python
metadata_struct: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValueOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServicePropertiesExtendedMetadataValue
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataValue">GoogleApphubServiceServicePropertiesExtendedMetadataValue</a>

---


### GoogleApphubServiceServicePropertiesFunctionalTypeList <a name="GoogleApphubServiceServicePropertiesFunctionalTypeList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference <a name="GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalType">GoogleApphubServiceServicePropertiesFunctionalType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServicePropertiesFunctionalType
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalType">GoogleApphubServiceServicePropertiesFunctionalType</a>

---


### GoogleApphubServiceServicePropertiesIdentityList <a name="GoogleApphubServiceServicePropertiesIdentityList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesIdentityOutputReference <a name="GoogleApphubServiceServicePropertiesIdentityOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.principal">principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentity">GoogleApphubServiceServicePropertiesIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.principal"></a>

```python
principal: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServicePropertiesIdentity
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentity">GoogleApphubServiceServicePropertiesIdentity</a>

---


### GoogleApphubServiceServicePropertiesList <a name="GoogleApphubServiceServicePropertiesList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesOutputReference <a name="GoogleApphubServiceServicePropertiesOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.extendedMetadata">extended_metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList">GoogleApphubServiceServicePropertiesExtendedMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.functionalType">functional_type</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList">GoogleApphubServiceServicePropertiesFunctionalTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.gcpProject">gcp_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.identity">identity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList">GoogleApphubServiceServicePropertiesIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.registrationType">registration_type</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList">GoogleApphubServiceServicePropertiesRegistrationTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceProperties">GoogleApphubServiceServiceProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extended_metadata`<sup>Required</sup> <a name="extended_metadata" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.extendedMetadata"></a>

```python
extended_metadata: GoogleApphubServiceServicePropertiesExtendedMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesExtendedMetadataList">GoogleApphubServiceServicePropertiesExtendedMetadataList</a>

---

##### `functional_type`<sup>Required</sup> <a name="functional_type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.functionalType"></a>

```python
functional_type: GoogleApphubServiceServicePropertiesFunctionalTypeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesFunctionalTypeList">GoogleApphubServiceServicePropertiesFunctionalTypeList</a>

---

##### `gcp_project`<sup>Required</sup> <a name="gcp_project" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.gcpProject"></a>

```python
gcp_project: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.identity"></a>

```python
identity: GoogleApphubServiceServicePropertiesIdentityList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesIdentityList">GoogleApphubServiceServicePropertiesIdentityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `registration_type`<sup>Required</sup> <a name="registration_type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.registrationType"></a>

```python
registration_type: GoogleApphubServiceServicePropertiesRegistrationTypeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList">GoogleApphubServiceServicePropertiesRegistrationTypeList</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServiceProperties
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceProperties">GoogleApphubServiceServiceProperties</a>

---


### GoogleApphubServiceServicePropertiesRegistrationTypeList <a name="GoogleApphubServiceServicePropertiesRegistrationTypeList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference <a name="GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationType">GoogleApphubServiceServicePropertiesRegistrationType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationTypeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServicePropertiesRegistrationType
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServicePropertiesRegistrationType">GoogleApphubServiceServicePropertiesRegistrationType</a>

---


### GoogleApphubServiceServiceReferenceList <a name="GoogleApphubServiceServiceReferenceList" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServiceReferenceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubServiceServiceReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApphubServiceServiceReferenceOutputReference <a name="GoogleApphubServiceServiceReferenceOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceServiceReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReference">GoogleApphubServiceServiceReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReferenceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubServiceServiceReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceServiceReference">GoogleApphubServiceServiceReference</a>

---


### GoogleApphubServiceTimeoutsOutputReference <a name="GoogleApphubServiceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_apphub_service

googleApphubService.GoogleApphubServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleApphubServiceTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApphubService.GoogleApphubServiceTimeouts">GoogleApphubServiceTimeouts</a>

---



