# `googleDiscoveryEngineAssistant` Submodule <a name="`googleDiscoveryEngineAssistant` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAssistant <a name="GoogleDiscoveryEngineAssistant" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  collection_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  customer_policy: GoogleDiscoveryEngineAssistantCustomerPolicy = None,
  deletion_policy: str = None,
  description: str = None,
  generation_config: GoogleDiscoveryEngineAssistantGenerationConfig = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineAssistantTimeouts = None,
  web_grounding_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.assistantId">assistant_id</a></code> | <code>str</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.collectionId">collection_id</a></code> | <code>str</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.engineId">engine_id</a></code> | <code>str</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.webGroundingType">web_grounding_type</a></code> | <code>str</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.assistantId"></a>

- *Type:* str

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#assistant_id GoogleDiscoveryEngineAssistant#assistant_id}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.collectionId"></a>

- *Type:* str

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#collection_id GoogleDiscoveryEngineAssistant#collection_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.displayName"></a>

- *Type:* str

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#display_name GoogleDiscoveryEngineAssistant#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.engineId"></a>

- *Type:* str

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#engine_id GoogleDiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.location"></a>

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#location GoogleDiscoveryEngineAssistant#location}

---

##### `customer_policy`<sup>Optional</sup> <a name="customer_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.customerPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#customer_policy GoogleDiscoveryEngineAssistant#customer_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#deletion_policy GoogleDiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.description"></a>

- *Type:* str

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#description GoogleDiscoveryEngineAssistant#description}

---

##### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.generationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#generation_config GoogleDiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#timeouts GoogleDiscoveryEngineAssistant#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.webGroundingType"></a>

- *Type:* str

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#web_grounding_type GoogleDiscoveryEngineAssistant#web_grounding_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy">put_customer_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig">put_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy">reset_customer_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig">reset_generation_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType">reset_web_grounding_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_customer_policy` <a name="put_customer_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy"></a>

```python
def put_customer_policy(
  banned_phrases: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases] = None,
  model_armor_config: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig = None
) -> None
```

###### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy.parameter.bannedPhrases"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#banned_phrases GoogleDiscoveryEngineAssistant#banned_phrases}

---

###### `model_armor_config`<sup>Optional</sup> <a name="model_armor_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy.parameter.modelArmorConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#model_armor_config GoogleDiscoveryEngineAssistant#model_armor_config}

---

##### `put_generation_config` <a name="put_generation_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig"></a>

```python
def put_generation_config(
  default_language: str = None,
  system_instruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction = None
) -> None
```

###### `default_language`<sup>Optional</sup> <a name="default_language" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig.parameter.defaultLanguage"></a>

- *Type:* str

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#default_language GoogleDiscoveryEngineAssistant#default_language}

---

###### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig.parameter.systemInstruction"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#system_instruction GoogleDiscoveryEngineAssistant#system_instruction}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}.

---

##### `reset_customer_policy` <a name="reset_customer_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy"></a>

```python
def reset_customer_policy() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_generation_config` <a name="reset_generation_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig"></a>

```python
def reset_generation_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_web_grounding_type` <a name="reset_web_grounding_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType"></a>

```python
def reset_web_grounding_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDiscoveryEngineAssistant to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput">assistant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput">customer_policy_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput">engine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput">generation_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput">web_grounding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId">assistant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId">engine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_policy`<sup>Required</sup> <a name="customer_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy"></a>

```python
customer_policy: GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `generation_config`<sup>Required</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig"></a>

```python
generation_config: GoogleDiscoveryEngineAssistantGenerationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineAssistantTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `assistant_id_input`<sup>Optional</sup> <a name="assistant_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput"></a>

```python
assistant_id_input: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `customer_policy_input`<sup>Optional</sup> <a name="customer_policy_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput"></a>

```python
customer_policy_input: GoogleDiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `engine_id_input`<sup>Optional</sup> <a name="engine_id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput"></a>

```python
engine_id_input: str
```

- *Type:* str

---

##### `generation_config_input`<sup>Optional</sup> <a name="generation_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput"></a>

```python
generation_config_input: GoogleDiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleDiscoveryEngineAssistantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---

##### `web_grounding_type_input`<sup>Optional</sup> <a name="web_grounding_type_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```python
web_grounding_type_input: str
```

- *Type:* str

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `web_grounding_type`<sup>Required</sup> <a name="web_grounding_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAssistantConfig <a name="GoogleDiscoveryEngineAssistantConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assistant_id: str,
  collection_id: str,
  display_name: str,
  engine_id: str,
  location: str,
  customer_policy: GoogleDiscoveryEngineAssistantCustomerPolicy = None,
  deletion_policy: str = None,
  description: str = None,
  generation_config: GoogleDiscoveryEngineAssistantGenerationConfig = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleDiscoveryEngineAssistantTimeouts = None,
  web_grounding_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId">assistant_id</a></code> | <code>str</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId">collection_id</a></code> | <code>str</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName">display_name</a></code> | <code>str</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId">engine_id</a></code> | <code>str</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location">location</a></code> | <code>str</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy">customer_policy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description">description</a></code> | <code>str</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig">generation_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType">web_grounding_type</a></code> | <code>str</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assistant_id`<sup>Required</sup> <a name="assistant_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId"></a>

```python
assistant_id: str
```

- *Type:* str

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#assistant_id GoogleDiscoveryEngineAssistant#assistant_id}

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#collection_id GoogleDiscoveryEngineAssistant#collection_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#display_name GoogleDiscoveryEngineAssistant#display_name}

---

##### `engine_id`<sup>Required</sup> <a name="engine_id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId"></a>

```python
engine_id: str
```

- *Type:* str

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#engine_id GoogleDiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#location GoogleDiscoveryEngineAssistant#location}

---

##### `customer_policy`<sup>Optional</sup> <a name="customer_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```python
customer_policy: GoogleDiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#customer_policy GoogleDiscoveryEngineAssistant#customer_policy}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#deletion_policy GoogleDiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#description GoogleDiscoveryEngineAssistant#description}

---

##### `generation_config`<sup>Optional</sup> <a name="generation_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig"></a>

```python
generation_config: GoogleDiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#generation_config GoogleDiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts"></a>

```python
timeouts: GoogleDiscoveryEngineAssistantTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#timeouts GoogleDiscoveryEngineAssistant#timeouts}

---

##### `web_grounding_type`<sup>Optional</sup> <a name="web_grounding_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```python
web_grounding_type: str
```

- *Type:* str

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#web_grounding_type GoogleDiscoveryEngineAssistant#web_grounding_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicy <a name="GoogleDiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy(
  banned_phrases: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases] = None,
  model_armor_config: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">banned_phrases</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">model_armor_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `banned_phrases`<sup>Optional</sup> <a name="banned_phrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```python
banned_phrases: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#banned_phrases GoogleDiscoveryEngineAssistant#banned_phrases}

---

##### `model_armor_config`<sup>Optional</sup> <a name="model_armor_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```python
model_armor_config: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#model_armor_config GoogleDiscoveryEngineAssistant#model_armor_config}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases(
  phrase: str,
  ignore_diacritics: bool | IResolvable = None,
  match_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">phrase</a></code> | <code>str</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">ignore_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">match_type</a></code> | <code>str</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```python
phrase: str
```

- *Type:* str

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#phrase GoogleDiscoveryEngineAssistant#phrase}

---

##### `ignore_diacritics`<sup>Optional</sup> <a name="ignore_diacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```python
ignore_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#ignore_diacritics GoogleDiscoveryEngineAssistant#ignore_diacritics}

---

##### `match_type`<sup>Optional</sup> <a name="match_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#match_type GoogleDiscoveryEngineAssistant#match_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig(
  response_template: str,
  user_prompt_template: str,
  failure_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">response_template</a></code> | <code>str</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">user_prompt_template</a></code> | <code>str</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">failure_mode</a></code> | <code>str</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#response_template GoogleDiscoveryEngineAssistant#response_template}

---

##### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```python
user_prompt_template: str
```

- *Type:* str

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#user_prompt_template GoogleDiscoveryEngineAssistant#user_prompt_template}

---

##### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#failure_mode GoogleDiscoveryEngineAssistant#failure_mode}

---

### GoogleDiscoveryEngineAssistantGenerationConfig <a name="GoogleDiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig(
  default_language: str = None,
  system_instruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">default_language</a></code> | <code>str</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction">system_instruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `default_language`<sup>Optional</sup> <a name="default_language" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```python
default_language: str
```

- *Type:* str

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#default_language GoogleDiscoveryEngineAssistant#default_language}

---

##### `system_instruction`<sup>Optional</sup> <a name="system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```python
system_instruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#system_instruction GoogleDiscoveryEngineAssistant#system_instruction}

---

### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction(
  additional_system_instruction: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">additional_system_instruction</a></code> | <code>str</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `additional_system_instruction`<sup>Optional</sup> <a name="additional_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```python
additional_system_instruction: str
```

- *Type:* str

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#additional_system_instruction GoogleDiscoveryEngineAssistant#additional_system_instruction}

---

### GoogleDiscoveryEngineAssistantTimeouts <a name="GoogleDiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---


### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">reset_ignore_diacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">reset_match_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_diacritics` <a name="reset_ignore_diacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```python
def reset_ignore_diacritics() -> None
```

##### `reset_match_type` <a name="reset_match_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```python
def reset_match_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">ignore_diacritics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">phrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">ignore_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">phrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ignore_diacritics_input`<sup>Optional</sup> <a name="ignore_diacritics_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```python
ignore_diacritics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `phrase_input`<sup>Optional</sup> <a name="phrase_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```python
phrase_input: str
```

- *Type:* str

---

##### `ignore_diacritics`<sup>Required</sup> <a name="ignore_diacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```python
ignore_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```python
phrase: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">reset_failure_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_mode` <a name="reset_failure_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```python
def reset_failure_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">failure_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">response_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">user_prompt_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">failure_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">response_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">user_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_mode_input`<sup>Optional</sup> <a name="failure_mode_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```python
failure_mode_input: str
```

- *Type:* str

---

##### `response_template_input`<sup>Optional</sup> <a name="response_template_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```python
response_template_input: str
```

- *Type:* str

---

##### `user_prompt_template_input`<sup>Optional</sup> <a name="user_prompt_template_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```python
user_prompt_template_input: str
```

- *Type:* str

---

##### `failure_mode`<sup>Required</sup> <a name="failure_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```python
failure_mode: str
```

- *Type:* str

---

##### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```python
response_template: str
```

- *Type:* str

---

##### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```python
user_prompt_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">put_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">put_model_armor_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">reset_banned_phrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">reset_model_armor_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_banned_phrases` <a name="put_banned_phrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```python
def put_banned_phrases(
  value: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---

##### `put_model_armor_config` <a name="put_model_armor_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```python
def put_model_armor_config(
  response_template: str,
  user_prompt_template: str,
  failure_mode: str = None
) -> None
```

###### `response_template`<sup>Required</sup> <a name="response_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.responseTemplate"></a>

- *Type:* str

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#response_template GoogleDiscoveryEngineAssistant#response_template}

---

###### `user_prompt_template`<sup>Required</sup> <a name="user_prompt_template" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.userPromptTemplate"></a>

- *Type:* str

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#user_prompt_template GoogleDiscoveryEngineAssistant#user_prompt_template}

---

###### `failure_mode`<sup>Optional</sup> <a name="failure_mode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.failureMode"></a>

- *Type:* str

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#failure_mode GoogleDiscoveryEngineAssistant#failure_mode}

---

##### `reset_banned_phrases` <a name="reset_banned_phrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```python
def reset_banned_phrases() -> None
```

##### `reset_model_armor_config` <a name="reset_model_armor_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```python
def reset_model_armor_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">banned_phrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">model_armor_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">banned_phrases_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">model_armor_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banned_phrases`<sup>Required</sup> <a name="banned_phrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```python
banned_phrases: GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `model_armor_config`<sup>Required</sup> <a name="model_armor_config" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```python
model_armor_config: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `banned_phrases_input`<sup>Optional</sup> <a name="banned_phrases_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```python
banned_phrases_input: IResolvable | typing.List[GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>]

---

##### `model_armor_config_input`<sup>Optional</sup> <a name="model_armor_config_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```python
model_armor_config_input: GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineAssistantCustomerPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">put_system_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">reset_default_language</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">reset_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_system_instruction` <a name="put_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```python
def put_system_instruction(
  additional_system_instruction: str = None
) -> None
```

###### `additional_system_instruction`<sup>Optional</sup> <a name="additional_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.additionalSystemInstruction"></a>

- *Type:* str

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_assistant#additional_system_instruction GoogleDiscoveryEngineAssistant#additional_system_instruction}

---

##### `reset_default_language` <a name="reset_default_language" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```python
def reset_default_language() -> None
```

##### `reset_system_instruction` <a name="reset_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```python
def reset_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">system_instruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">default_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">system_instruction_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">default_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `system_instruction`<sup>Required</sup> <a name="system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```python
system_instruction: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `default_language_input`<sup>Optional</sup> <a name="default_language_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```python
default_language_input: str
```

- *Type:* str

---

##### `system_instruction_input`<sup>Optional</sup> <a name="system_instruction_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```python
system_instruction_input: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `default_language`<sup>Required</sup> <a name="default_language" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```python
default_language: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineAssistantGenerationConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">reset_additional_system_instruction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_system_instruction` <a name="reset_additional_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```python
def reset_additional_system_instruction() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">additional_system_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">additional_system_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_system_instruction_input`<sup>Optional</sup> <a name="additional_system_instruction_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```python
additional_system_instruction_input: str
```

- *Type:* str

---

##### `additional_system_instruction`<sup>Required</sup> <a name="additional_system_instruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```python
additional_system_instruction: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### GoogleDiscoveryEngineAssistantTimeoutsOutputReference <a name="GoogleDiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_discovery_engine_assistant

googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleDiscoveryEngineAssistantTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---



