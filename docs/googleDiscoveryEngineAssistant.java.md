# `googleDiscoveryEngineAssistant` Submodule <a name="`googleDiscoveryEngineAssistant` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineAssistant <a name="GoogleDiscoveryEngineAssistant" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant google_discovery_engine_assistant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistant;

GoogleDiscoveryEngineAssistant.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assistantId(java.lang.String)
    .collectionId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .customerPolicy(GoogleDiscoveryEngineAssistantCustomerPolicy)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .generationConfig(GoogleDiscoveryEngineAssistantGenerationConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineAssistantTimeouts)
//  .webGroundingType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.assistantId">assistantId</a></code> | <code>java.lang.String</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.engineId">engineId</a></code> | <code>java.lang.String</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.webGroundingType">webGroundingType</a></code> | <code>java.lang.String</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.assistantId"></a>

- *Type:* java.lang.String

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#assistant_id GoogleDiscoveryEngineAssistant#assistant_id}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.collectionId"></a>

- *Type:* java.lang.String

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#collection_id GoogleDiscoveryEngineAssistant#collection_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#display_name GoogleDiscoveryEngineAssistant#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.engineId"></a>

- *Type:* java.lang.String

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#engine_id GoogleDiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#location GoogleDiscoveryEngineAssistant#location}

---

##### `customerPolicy`<sup>Optional</sup> <a name="customerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.customerPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#customer_policy GoogleDiscoveryEngineAssistant#customer_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#deletion_policy GoogleDiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#description GoogleDiscoveryEngineAssistant#description}

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.generationConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#generation_config GoogleDiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#timeouts GoogleDiscoveryEngineAssistant#timeouts}

---

##### `webGroundingType`<sup>Optional</sup> <a name="webGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.Initializer.parameter.webGroundingType"></a>

- *Type:* java.lang.String

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#web_grounding_type GoogleDiscoveryEngineAssistant#web_grounding_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy">putCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig">putGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy">resetCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig">resetGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType">resetWebGroundingType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerPolicy` <a name="putCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy"></a>

```java
public void putCustomerPolicy(GoogleDiscoveryEngineAssistantCustomerPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putCustomerPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---

##### `putGenerationConfig` <a name="putGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig"></a>

```java
public void putGenerationConfig(GoogleDiscoveryEngineAssistantGenerationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts"></a>

```java
public void putTimeouts(GoogleDiscoveryEngineAssistantTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---

##### `resetCustomerPolicy` <a name="resetCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetCustomerPolicy"></a>

```java
public void resetCustomerPolicy()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGenerationConfig` <a name="resetGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetGenerationConfig"></a>

```java
public void resetGenerationConfig()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWebGroundingType` <a name="resetWebGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.resetWebGroundingType"></a>

```java
public void resetWebGroundingType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistant;

GoogleDiscoveryEngineAssistant.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistant;

GoogleDiscoveryEngineAssistant.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistant;

GoogleDiscoveryEngineAssistant.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistant;

GoogleDiscoveryEngineAssistant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDiscoveryEngineAssistant.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineAssistant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDiscoveryEngineAssistant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDiscoveryEngineAssistant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineAssistant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput">assistantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput">customerPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput">engineIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput">generationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput">webGroundingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId">assistantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId">engineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType">webGroundingType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerPolicy`<sup>Required</sup> <a name="customerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicy"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference getCustomerPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference</a>

---

##### `generationConfig`<sup>Required</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfig"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfigOutputReference getGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeouts"></a>

```java
public GoogleDiscoveryEngineAssistantTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference">GoogleDiscoveryEngineAssistantTimeoutsOutputReference</a>

---

##### `assistantIdInput`<sup>Optional</sup> <a name="assistantIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantIdInput"></a>

```java
public java.lang.String getAssistantIdInput();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `customerPolicyInput`<sup>Optional</sup> <a name="customerPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.customerPolicyInput"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicy getCustomerPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineIdInput"></a>

```java
public java.lang.String getEngineIdInput();
```

- *Type:* java.lang.String

---

##### `generationConfigInput`<sup>Optional</sup> <a name="generationConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.generationConfigInput"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfig getGenerationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDiscoveryEngineAssistantTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---

##### `webGroundingTypeInput`<sup>Optional</sup> <a name="webGroundingTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingTypeInput"></a>

```java
public java.lang.String getWebGroundingTypeInput();
```

- *Type:* java.lang.String

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.assistantId"></a>

```java
public java.lang.String getAssistantId();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `webGroundingType`<sup>Required</sup> <a name="webGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.webGroundingType"></a>

```java
public java.lang.String getWebGroundingType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistant.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineAssistantConfig <a name="GoogleDiscoveryEngineAssistantConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantConfig;

GoogleDiscoveryEngineAssistantConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assistantId(java.lang.String)
    .collectionId(java.lang.String)
    .displayName(java.lang.String)
    .engineId(java.lang.String)
    .location(java.lang.String)
//  .customerPolicy(GoogleDiscoveryEngineAssistantCustomerPolicy)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .generationConfig(GoogleDiscoveryEngineAssistantGenerationConfig)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDiscoveryEngineAssistantTimeouts)
//  .webGroundingType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId">assistantId</a></code> | <code>java.lang.String</code> | The unique id of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | The unique id of the collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The assistant display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId">engineId</a></code> | <code>java.lang.String</code> | The unique id of the engine. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location">location</a></code> | <code>java.lang.String</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy">customerPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | customer_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType">webGroundingType</a></code> | <code>java.lang.String</code> | The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assistantId`<sup>Required</sup> <a name="assistantId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.assistantId"></a>

```java
public java.lang.String getAssistantId();
```

- *Type:* java.lang.String

The unique id of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#assistant_id GoogleDiscoveryEngineAssistant#assistant_id}

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

The unique id of the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#collection_id GoogleDiscoveryEngineAssistant#collection_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The assistant display name.

It must be a UTF-8 encoded string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#display_name GoogleDiscoveryEngineAssistant#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.engineId"></a>

```java
public java.lang.String getEngineId();
```

- *Type:* java.lang.String

The unique id of the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#engine_id GoogleDiscoveryEngineAssistant#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#location GoogleDiscoveryEngineAssistant#location}

---

##### `customerPolicy`<sup>Optional</sup> <a name="customerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.customerPolicy"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicy getCustomerPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

customer_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#customer_policy GoogleDiscoveryEngineAssistant#customer_policy}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#deletion_policy GoogleDiscoveryEngineAssistant#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description for additional information. Expected to be shown on the configuration UI, not to the users of the assistant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#description GoogleDiscoveryEngineAssistant#description}

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.generationConfig"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfig getGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#generation_config GoogleDiscoveryEngineAssistant#generation_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#id GoogleDiscoveryEngineAssistant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#project GoogleDiscoveryEngineAssistant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.timeouts"></a>

```java
public GoogleDiscoveryEngineAssistantTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#timeouts GoogleDiscoveryEngineAssistant#timeouts}

---

##### `webGroundingType`<sup>Optional</sup> <a name="webGroundingType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantConfig.property.webGroundingType"></a>

```java
public java.lang.String getWebGroundingType();
```

- *Type:* java.lang.String

The type of web grounding to use. The supported values: 'WEB_GROUNDING_TYPE_DISABLED', 'WEB_GROUNDING_TYPE_GOOGLE_SEARCH', 'WEB_GROUNDING_TYPE_ENTERPRISE_WEB_SEARCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#web_grounding_type GoogleDiscoveryEngineAssistant#web_grounding_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicy <a name="GoogleDiscoveryEngineAssistantCustomerPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicy;

GoogleDiscoveryEngineAssistantCustomerPolicy.builder()
//  .bannedPhrases(IResolvable|java.util.List<GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases>)
//  .modelArmorConfig(GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases">bannedPhrases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>></code> | banned_phrases block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | model_armor_config block. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.bannedPhrases"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases> getBannedPhrases();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>>

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#banned_phrases GoogleDiscoveryEngineAssistant#banned_phrases}

---

##### `modelArmorConfig`<sup>Optional</sup> <a name="modelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy.property.modelArmorConfig"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig getModelArmorConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

model_armor_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#model_armor_config GoogleDiscoveryEngineAssistant#model_armor_config}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases;

GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.builder()
    .phrase(java.lang.String)
//  .ignoreDiacritics(java.lang.Boolean|IResolvable)
//  .matchType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase">phrase</a></code> | <code>java.lang.String</code> | The raw string content to be banned. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'. |

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.phrase"></a>

```java
public java.lang.String getPhrase();
```

- *Type:* java.lang.String

The raw string content to be banned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#phrase GoogleDiscoveryEngineAssistant#phrase}

---

##### `ignoreDiacritics`<sup>Optional</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.ignoreDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, diacritical marks (e.g., accents, umlauts) are ignored when matching banned phrases. For example, "cafe" would match "café".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#ignore_diacritics GoogleDiscoveryEngineAssistant#ignore_diacritics}

---

##### `matchType`<sup>Optional</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Match type for the banned phrase. The supported values: 'SIMPLE_STRING_MATCH', 'WORD_BOUNDARY_STRING_MATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#match_type GoogleDiscoveryEngineAssistant#match_type}

---

### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig;

GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.builder()
    .responseTemplate(java.lang.String)
    .userPromptTemplate(java.lang.String)
//  .failureMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate">responseTemplate</a></code> | <code>java.lang.String</code> | The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate">userPromptTemplate</a></code> | <code>java.lang.String</code> | The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode">failureMode</a></code> | <code>java.lang.String</code> | Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'. |

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.responseTemplate"></a>

```java
public java.lang.String getResponseTemplate();
```

- *Type:* java.lang.String

The resource name of the Model Armor template for sanitizing assistant responses. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the assistant
response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#response_template GoogleDiscoveryEngineAssistant#response_template}

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.userPromptTemplate"></a>

```java
public java.lang.String getUserPromptTemplate();
```

- *Type:* java.lang.String

The resource name of the Model Armor template for sanitizing user prompts. Format: 'projects/{project}/locations/{location}/templates/{template_id}'.

If not specified, no sanitization will be applied to the user prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#user_prompt_template GoogleDiscoveryEngineAssistant#user_prompt_template}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig.property.failureMode"></a>

```java
public java.lang.String getFailureMode();
```

- *Type:* java.lang.String

Defines the failure mode for Model Armor sanitization. The supported values: 'FAIL_OPEN', 'FAIL_CLOSED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#failure_mode GoogleDiscoveryEngineAssistant#failure_mode}

---

### GoogleDiscoveryEngineAssistantGenerationConfig <a name="GoogleDiscoveryEngineAssistantGenerationConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantGenerationConfig;

GoogleDiscoveryEngineAssistantGenerationConfig.builder()
//  .defaultLanguage(java.lang.String)
//  .systemInstruction(GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage">defaultLanguage</a></code> | <code>java.lang.String</code> | The default language to use for the generation of the assistant response. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | system_instruction block. |

---

##### `defaultLanguage`<sup>Optional</sup> <a name="defaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.defaultLanguage"></a>

```java
public java.lang.String getDefaultLanguage();
```

- *Type:* java.lang.String

The default language to use for the generation of the assistant response.

Use an ISO 639-1 language code such as 'en'.
If not specified, the language will be automatically detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#default_language GoogleDiscoveryEngineAssistant#default_language}

---

##### `systemInstruction`<sup>Optional</sup> <a name="systemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig.property.systemInstruction"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction getSystemInstruction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

system_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#system_instruction GoogleDiscoveryEngineAssistant#system_instruction}

---

### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction;

GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.builder()
//  .additionalSystemInstruction(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>java.lang.String</code> | Additional system instruction that will be added to the default system instruction. |

---

##### `additionalSystemInstruction`<sup>Optional</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction.property.additionalSystemInstruction"></a>

```java
public java.lang.String getAdditionalSystemInstruction();
```

- *Type:* java.lang.String

Additional system instruction that will be added to the default system instruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#additional_system_instruction GoogleDiscoveryEngineAssistant#additional_system_instruction}

---

### GoogleDiscoveryEngineAssistantTimeouts <a name="GoogleDiscoveryEngineAssistantTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantTimeouts;

GoogleDiscoveryEngineAssistantTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#create GoogleDiscoveryEngineAssistant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#delete GoogleDiscoveryEngineAssistant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_assistant#update GoogleDiscoveryEngineAssistant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList;

new GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference;

new GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics">resetIgnoreDiacritics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType">resetMatchType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreDiacritics` <a name="resetIgnoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetIgnoreDiacritics"></a>

```java
public void resetIgnoreDiacritics()
```

##### `resetMatchType` <a name="resetMatchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.resetMatchType"></a>

```java
public void resetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput">ignoreDiacriticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput">phraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics">ignoreDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase">phrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ignoreDiacriticsInput`<sup>Optional</sup> <a name="ignoreDiacriticsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacriticsInput"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreDiacriticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `phraseInput`<sup>Optional</sup> <a name="phraseInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phraseInput"></a>

```java
public java.lang.String getPhraseInput();
```

- *Type:* java.lang.String

---

##### `ignoreDiacritics`<sup>Required</sup> <a name="ignoreDiacritics" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.ignoreDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getIgnoreDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `phrase`<sup>Required</sup> <a name="phrase" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.phrase"></a>

```java
public java.lang.String getPhrase();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference;

new GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode">resetFailureMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureMode` <a name="resetFailureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.resetFailureMode"></a>

```java
public void resetFailureMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput">failureModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput">responseTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput">userPromptTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode">failureMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate">responseTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate">userPromptTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureModeInput"></a>

```java
public java.lang.String getFailureModeInput();
```

- *Type:* java.lang.String

---

##### `responseTemplateInput`<sup>Optional</sup> <a name="responseTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplateInput"></a>

```java
public java.lang.String getResponseTemplateInput();
```

- *Type:* java.lang.String

---

##### `userPromptTemplateInput`<sup>Optional</sup> <a name="userPromptTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplateInput"></a>

```java
public java.lang.String getUserPromptTemplateInput();
```

- *Type:* java.lang.String

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.failureMode"></a>

```java
public java.lang.String getFailureMode();
```

- *Type:* java.lang.String

---

##### `responseTemplate`<sup>Required</sup> <a name="responseTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.responseTemplate"></a>

```java
public java.lang.String getResponseTemplate();
```

- *Type:* java.lang.String

---

##### `userPromptTemplate`<sup>Required</sup> <a name="userPromptTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.userPromptTemplate"></a>

```java
public java.lang.String getUserPromptTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---


### GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference <a name="GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference;

new GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig">putModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig">resetModelArmorConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases"></a>

```java
public void putBannedPhrases(IResolvable|java.util.List<GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>>

---

##### `putModelArmorConfig` <a name="putModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig"></a>

```java
public void putModelArmorConfig(GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.putModelArmorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetBannedPhrases"></a>

```java
public void resetBannedPhrases()
```

##### `resetModelArmorConfig` <a name="resetModelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.resetModelArmorConfig"></a>

```java
public void resetModelArmorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig">modelArmorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput">modelArmorConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrases"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList getBannedPhrases();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrasesList</a>

---

##### `modelArmorConfig`<sup>Required</sup> <a name="modelArmorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfig"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference getModelArmorConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfigOutputReference</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.bannedPhrasesInput"></a>

```java
public IResolvable|java.util.List<GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases> getBannedPhrasesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases">GoogleDiscoveryEngineAssistantCustomerPolicyBannedPhrases</a>>

---

##### `modelArmorConfigInput`<sup>Optional</sup> <a name="modelArmorConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.modelArmorConfigInput"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig getModelArmorConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig">GoogleDiscoveryEngineAssistantCustomerPolicyModelArmorConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicyOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAssistantCustomerPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantCustomerPolicy">GoogleDiscoveryEngineAssistantCustomerPolicy</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference;

new GoogleDiscoveryEngineAssistantGenerationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction">putSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage">resetDefaultLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction">resetSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSystemInstruction` <a name="putSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction"></a>

```java
public void putSystemInstruction(GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.putSystemInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `resetDefaultLanguage` <a name="resetDefaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetDefaultLanguage"></a>

```java
public void resetDefaultLanguage()
```

##### `resetSystemInstruction` <a name="resetSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.resetSystemInstruction"></a>

```java
public void resetSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction">systemInstruction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput">defaultLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput">systemInstructionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage">defaultLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemInstruction`<sup>Required</sup> <a name="systemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstruction"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference getSystemInstruction();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference</a>

---

##### `defaultLanguageInput`<sup>Optional</sup> <a name="defaultLanguageInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguageInput"></a>

```java
public java.lang.String getDefaultLanguageInput();
```

- *Type:* java.lang.String

---

##### `systemInstructionInput`<sup>Optional</sup> <a name="systemInstructionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.systemInstructionInput"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction getSystemInstructionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---

##### `defaultLanguage`<sup>Required</sup> <a name="defaultLanguage" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.defaultLanguage"></a>

```java
public java.lang.String getDefaultLanguage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfig">GoogleDiscoveryEngineAssistantGenerationConfig</a>

---


### GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference <a name="GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference;

new GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction">resetAdditionalSystemInstruction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalSystemInstruction` <a name="resetAdditionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.resetAdditionalSystemInstruction"></a>

```java
public void resetAdditionalSystemInstruction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput">additionalSystemInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction">additionalSystemInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalSystemInstructionInput`<sup>Optional</sup> <a name="additionalSystemInstructionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstructionInput"></a>

```java
public java.lang.String getAdditionalSystemInstructionInput();
```

- *Type:* java.lang.String

---

##### `additionalSystemInstruction`<sup>Required</sup> <a name="additionalSystemInstruction" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.additionalSystemInstruction"></a>

```java
public java.lang.String getAdditionalSystemInstruction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstructionOutputReference.property.internalValue"></a>

```java
public GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction">GoogleDiscoveryEngineAssistantGenerationConfigSystemInstruction</a>

---


### GoogleDiscoveryEngineAssistantTimeoutsOutputReference <a name="GoogleDiscoveryEngineAssistantTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_discovery_engine_assistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference;

new GoogleDiscoveryEngineAssistantTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDiscoveryEngineAssistantTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineAssistant.GoogleDiscoveryEngineAssistantTimeouts">GoogleDiscoveryEngineAssistantTimeouts</a>

---



