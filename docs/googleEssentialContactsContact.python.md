# `googleEssentialContactsContact` Submodule <a name="`googleEssentialContactsContact` Submodule" id="@cdktn/provider-google-beta.googleEssentialContactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEssentialContactsContact <a name="GoogleEssentialContactsContact" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact google_essential_contacts_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContact(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email: str,
  language_tag: str,
  notification_category_subscriptions: typing.List[str],
  parent: str,
  id: str = None,
  timeouts: GoogleEssentialContactsContactTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.email">email</a></code> | <code>str</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.languageTag">language_tag</a></code> | <code>str</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.notificationCategorySubscriptions">notification_category_subscriptions</a></code> | <code>typing.List[str]</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.email"></a>

- *Type:* str

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#email GoogleEssentialContactsContact#email}

---

##### `language_tag`<sup>Required</sup> <a name="language_tag" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.languageTag"></a>

- *Type:* str

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#language_tag GoogleEssentialContactsContact#language_tag}

---

##### `notification_category_subscriptions`<sup>Required</sup> <a name="notification_category_subscriptions" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.notificationCategorySubscriptions"></a>

- *Type:* typing.List[str]

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#notification_category_subscriptions GoogleEssentialContactsContact#notification_category_subscriptions}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.parent"></a>

- *Type:* str

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#parent GoogleEssentialContactsContact#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#timeouts GoogleEssentialContactsContact#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#create GoogleEssentialContactsContact#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#delete GoogleEssentialContactsContact#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#update GoogleEssentialContactsContact#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleEssentialContactsContact resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleEssentialContactsContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleEssentialContactsContact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleEssentialContactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleEssentialContactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference">GoogleEssentialContactsContactTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTagInput">language_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptionsInput">notification_category_subscriptions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTag">language_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptions">notification_category_subscriptions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeouts"></a>

```python
timeouts: GoogleEssentialContactsContactTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference">GoogleEssentialContactsContactTimeoutsOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_tag_input`<sup>Optional</sup> <a name="language_tag_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTagInput"></a>

```python
language_tag_input: str
```

- *Type:* str

---

##### `notification_category_subscriptions_input`<sup>Optional</sup> <a name="notification_category_subscriptions_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptionsInput"></a>

```python
notification_category_subscriptions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleEssentialContactsContactTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language_tag`<sup>Required</sup> <a name="language_tag" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.languageTag"></a>

```python
language_tag: str
```

- *Type:* str

---

##### `notification_category_subscriptions`<sup>Required</sup> <a name="notification_category_subscriptions" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.notificationCategorySubscriptions"></a>

```python
notification_category_subscriptions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEssentialContactsContactConfig <a name="GoogleEssentialContactsContactConfig" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContactConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  email: str,
  language_tag: str,
  notification_category_subscriptions: typing.List[str],
  parent: str,
  id: str = None,
  timeouts: GoogleEssentialContactsContactTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.email">email</a></code> | <code>str</code> | The email address to send notifications to. This does not need to be a Google account. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.languageTag">language_tag</a></code> | <code>str</code> | The preferred language for notifications, as a ISO 639-1 language code. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.notificationCategorySubscriptions">notification_category_subscriptions</a></code> | <code>typing.List[str]</code> | The categories of notifications that the contact will receive communications for. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.parent">parent</a></code> | <code>str</code> | The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.email"></a>

```python
email: str
```

- *Type:* str

The email address to send notifications to. This does not need to be a Google account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#email GoogleEssentialContactsContact#email}

---

##### `language_tag`<sup>Required</sup> <a name="language_tag" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.languageTag"></a>

```python
language_tag: str
```

- *Type:* str

The preferred language for notifications, as a ISO 639-1 language code.

See Supported languages for a list of supported languages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#language_tag GoogleEssentialContactsContact#language_tag}

---

##### `notification_category_subscriptions`<sup>Required</sup> <a name="notification_category_subscriptions" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.notificationCategorySubscriptions"></a>

```python
notification_category_subscriptions: typing.List[str]
```

- *Type:* typing.List[str]

The categories of notifications that the contact will receive communications for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#notification_category_subscriptions GoogleEssentialContactsContact#notification_category_subscriptions}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#parent GoogleEssentialContactsContact#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#id GoogleEssentialContactsContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactConfig.property.timeouts"></a>

```python
timeouts: GoogleEssentialContactsContactTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#timeouts GoogleEssentialContactsContact#timeouts}

---

### GoogleEssentialContactsContactTimeouts <a name="GoogleEssentialContactsContactTimeouts" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#create GoogleEssentialContactsContact#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#delete GoogleEssentialContactsContact#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#update GoogleEssentialContactsContact#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#create GoogleEssentialContactsContact#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#delete GoogleEssentialContactsContact#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_essential_contacts_contact#update GoogleEssentialContactsContact#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEssentialContactsContactTimeoutsOutputReference <a name="GoogleEssentialContactsContactTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_essential_contacts_contact

googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleEssentialContactsContactTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleEssentialContactsContact.GoogleEssentialContactsContactTimeouts">GoogleEssentialContactsContactTimeouts</a>

---



