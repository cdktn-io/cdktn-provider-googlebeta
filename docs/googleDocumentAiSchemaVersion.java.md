# `googleDocumentAiSchemaVersion` Submodule <a name="`googleDocumentAiSchemaVersion` Submodule" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiSchemaVersion <a name="GoogleDocumentAiSchemaVersion" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersion;

GoogleDocumentAiSchemaVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .schema(GoogleDocumentAiSchemaVersionSchema)
    .schemaId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDocumentAiSchemaVersionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schemaId">schemaId</a></code> | <code>java.lang.String</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.schemaId"></a>

- *Type:* java.lang.String

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema"></a>

```java
public void putSchema(GoogleDocumentAiSchemaVersionSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts"></a>

```java
public void putTimeouts(GoogleDocumentAiSchemaVersionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersion;

GoogleDocumentAiSchemaVersion.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersion;

GoogleDocumentAiSchemaVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersion;

GoogleDocumentAiSchemaVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersion;

GoogleDocumentAiSchemaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDocumentAiSchemaVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDocumentAiSchemaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput">schemaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts"></a>

```java
public GoogleDocumentAiSchemaVersionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput"></a>

```java
public java.lang.String getSchemaIdInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput"></a>

```java
public GoogleDocumentAiSchemaVersionSchema getSchemaInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDocumentAiSchemaVersionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiSchemaVersionConfig <a name="GoogleDocumentAiSchemaVersionConfig" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionConfig;

GoogleDocumentAiSchemaVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .schema(GoogleDocumentAiSchemaVersionSchema)
    .schemaId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDocumentAiSchemaVersionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId">schemaId</a></code> | <code>java.lang.String</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema"></a>

```java
public GoogleDocumentAiSchemaVersionSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId"></a>

```java
public java.lang.String getSchemaId();
```

- *Type:* java.lang.String

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts"></a>

```java
public GoogleDocumentAiSchemaVersionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

### GoogleDocumentAiSchemaVersionSchema <a name="GoogleDocumentAiSchemaVersionSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchema;

GoogleDocumentAiSchemaVersionSchema.builder()
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .documentPrompt(java.lang.String)
//  .entityTypes(IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypes>)
//  .metadata(GoogleDocumentAiSchemaVersionSchemaMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description">description</a></code> | <code>java.lang.String</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt">documentPrompt</a></code> | <code>java.lang.String</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes">entityTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>></code> | entity_types block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `documentPrompt`<sup>Optional</sup> <a name="documentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```java
public java.lang.String getDocumentPrompt();
```

- *Type:* java.lang.String

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypes> getEntityTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>>

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaMetadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypes <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypes;

GoogleDocumentAiSchemaVersionSchemaEntityTypes.builder()
    .name(java.lang.String)
//  .baseTypes(java.util.List<java.lang.String>)
//  .displayName(java.lang.String)
//  .enumValues(GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues)
//  .properties(IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name">name</a></code> | <code>java.lang.String</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">baseTypes</a></code> | <code>java.util.List<java.lang.String></code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties">properties</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | properties block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `baseTypes`<sup>Optional</sup> <a name="baseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```java
public java.util.List<java.lang.String> getBaseTypes();
```

- *Type:* java.util.List<java.lang.String>

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#base_types GoogleDocumentAiSchemaVersion#base_types}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `enumValues`<sup>Optional</sup> <a name="enumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues getEnumValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#enum_values GoogleDocumentAiSchemaVersion#enum_values}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties> getProperties();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#properties GoogleDocumentAiSchemaVersion#properties}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues;

GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.builder()
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | The individual values that this enum values type can include. |

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties;

GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.builder()
    .name(java.lang.String)
    .valueType(java.lang.String)
//  .displayName(java.lang.String)
//  .method(java.lang.String)
//  .occurrenceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">name</a></code> | <code>java.lang.String</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">valueType</a></code> | <code>java.lang.String</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">method</a></code> | <code>java.lang.String</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">occurrenceType</a></code> | <code>java.lang.String</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#value_type GoogleDocumentAiSchemaVersion#value_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#method GoogleDocumentAiSchemaVersion#method}

---

##### `occurrenceType`<sup>Optional</sup> <a name="occurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```java
public java.lang.String getOccurrenceType();
```

- *Type:* java.lang.String

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#occurrence_type GoogleDocumentAiSchemaVersion#occurrence_type}

---

### GoogleDocumentAiSchemaVersionSchemaMetadata <a name="GoogleDocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaMetadata;

GoogleDocumentAiSchemaVersionSchemaMetadata.builder()
//  .documentAllowMultipleLabels(java.lang.Boolean|IResolvable)
//  .documentSplitter(java.lang.Boolean|IResolvable)
//  .prefixedNamingOnProperties(java.lang.Boolean|IResolvable)
//  .skipNamingValidation(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">documentSplitter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">skipNamingValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `documentAllowMultipleLabels`<sup>Optional</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `documentSplitter`<sup>Optional</sup> <a name="documentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

##### `prefixedNamingOnProperties`<sup>Optional</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `skipNamingValidation`<sup>Optional</sup> <a name="skipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

### GoogleDocumentAiSchemaVersionTimeouts <a name="GoogleDocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionTimeouts;

GoogleDocumentAiSchemaVersionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesList;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">putEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">resetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">resetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnumValues` <a name="putEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```java
public void putEnumValues(GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```java
public void putProperties(IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---

##### `resetBaseTypes` <a name="resetBaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```java
public void resetBaseTypes()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEnumValues` <a name="resetEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```java
public void resetEnumValues()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">enumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">baseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">enumValuesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">baseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enumValues`<sup>Required</sup> <a name="enumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference getEnumValues();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `baseTypesInput`<sup>Optional</sup> <a name="baseTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```java
public java.util.List<java.lang.String> getBaseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enumValuesInput`<sup>Optional</sup> <a name="enumValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues getEnumValuesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties> getPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---

##### `baseTypes`<sup>Required</sup> <a name="baseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```java
public java.util.List<java.lang.String> getBaseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference;

new GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">resetOccurrenceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetOccurrenceType` <a name="resetOccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```java
public void resetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">occurrenceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">occurrenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `occurrenceTypeInput`<sup>Optional</sup> <a name="occurrenceTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```java
public java.lang.String getOccurrenceTypeInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `occurrenceType`<sup>Required</sup> <a name="occurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```java
public java.lang.String getOccurrenceType();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties">GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference;

new GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">resetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">resetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">resetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">resetSkipNamingValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocumentAllowMultipleLabels` <a name="resetDocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```java
public void resetDocumentAllowMultipleLabels()
```

##### `resetDocumentSplitter` <a name="resetDocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```java
public void resetDocumentSplitter()
```

##### `resetPrefixedNamingOnProperties` <a name="resetPrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```java
public void resetPrefixedNamingOnProperties()
```

##### `resetSkipNamingValidation` <a name="resetSkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```java
public void resetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">documentAllowMultipleLabelsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">documentSplitterInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">prefixedNamingOnPropertiesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">skipNamingValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">documentAllowMultipleLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">documentSplitter</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">prefixedNamingOnProperties</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">skipNamingValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `documentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="documentAllowMultipleLabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabelsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentSplitterInput`<sup>Optional</sup> <a name="documentSplitterInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitterInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="prefixedNamingOnPropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnPropertiesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipNamingValidationInput`<sup>Optional</sup> <a name="skipNamingValidationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentAllowMultipleLabels`<sup>Required</sup> <a name="documentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```java
public java.lang.Boolean|IResolvable getDocumentAllowMultipleLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `documentSplitter`<sup>Required</sup> <a name="documentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```java
public java.lang.Boolean|IResolvable getDocumentSplitter();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixedNamingOnProperties`<sup>Required</sup> <a name="prefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```java
public java.lang.Boolean|IResolvable getPrefixedNamingOnProperties();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `skipNamingValidation`<sup>Required</sup> <a name="skipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```java
public java.lang.Boolean|IResolvable getSkipNamingValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaMetadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---


### GoogleDocumentAiSchemaVersionSchemaOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionSchemaOutputReference;

new GoogleDocumentAiSchemaVersionSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">resetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```java
public void putEntityTypes(IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```java
public void putMetadata(GoogleDocumentAiSchemaVersionSchemaMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetDocumentPrompt` <a name="resetDocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```java
public void resetDocumentPrompt()
```

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```java
public void resetEntityTypes()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">documentPromptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">documentPrompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaEntityTypesList getEntityTypes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `documentPromptInput`<sup>Optional</sup> <a name="documentPromptInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```java
public java.lang.String getDocumentPromptInput();
```

- *Type:* java.lang.String

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```java
public IResolvable|java.util.List<GoogleDocumentAiSchemaVersionSchemaEntityTypes> getEntityTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes">GoogleDocumentAiSchemaVersionSchemaEntityTypes</a>>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```java
public GoogleDocumentAiSchemaVersionSchemaMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `documentPrompt`<sup>Required</sup> <a name="documentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```java
public java.lang.String getDocumentPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```java
public GoogleDocumentAiSchemaVersionSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---


### GoogleDocumentAiSchemaVersionTimeoutsOutputReference <a name="GoogleDocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_document_ai_schema_version.GoogleDocumentAiSchemaVersionTimeoutsOutputReference;

new GoogleDocumentAiSchemaVersionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDocumentAiSchemaVersionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---



