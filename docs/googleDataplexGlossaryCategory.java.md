# `googleDataplexGlossaryCategory` Submodule <a name="`googleDataplexGlossaryCategory` Submodule" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexGlossaryCategory <a name="GoogleDataplexGlossaryCategory" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category google_dataplex_glossary_category}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategory;

GoogleDataplexGlossaryCategory.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .categoryId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexGlossaryCategoryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.categoryId">categoryId</a></code> | <code>java.lang.String</code> | The category id for creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#id GoogleDataplexGlossaryCategory#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#project GoogleDataplexGlossaryCategory#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#location GoogleDataplexGlossaryCategory#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#parent GoogleDataplexGlossaryCategory#parent}

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.categoryId"></a>

- *Type:* java.lang.String

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#category_id GoogleDataplexGlossaryCategory#category_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#deletion_policy GoogleDataplexGlossaryCategory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#description GoogleDataplexGlossaryCategory#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#display_name GoogleDataplexGlossaryCategory#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.glossaryId"></a>

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#glossary_id GoogleDataplexGlossaryCategory#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#id GoogleDataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#labels GoogleDataplexGlossaryCategory#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#project GoogleDataplexGlossaryCategory#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#timeouts GoogleDataplexGlossaryCategory#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetCategoryId">resetCategoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetGlossaryId">resetGlossaryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexGlossaryCategoryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a>

---

##### `resetCategoryId` <a name="resetCategoryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetCategoryId"></a>

```java
public void resetCategoryId()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetGlossaryId` <a name="resetGlossaryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetGlossaryId"></a>

```java
public void resetGlossaryId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexGlossaryCategory resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategory;

GoogleDataplexGlossaryCategory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategory;

GoogleDataplexGlossaryCategory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategory;

GoogleDataplexGlossaryCategory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategory;

GoogleDataplexGlossaryCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexGlossaryCategory.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataplexGlossaryCategory resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexGlossaryCategory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexGlossaryCategory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexGlossaryCategory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference">GoogleDataplexGlossaryCategoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.categoryIdInput">categoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.glossaryIdInput">glossaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.categoryId">categoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.timeouts"></a>

```java
public GoogleDataplexGlossaryCategoryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference">GoogleDataplexGlossaryCategoryTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `categoryIdInput`<sup>Optional</sup> <a name="categoryIdInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.categoryIdInput"></a>

```java
public java.lang.String getCategoryIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `glossaryIdInput`<sup>Optional</sup> <a name="glossaryIdInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.glossaryIdInput"></a>

```java
public java.lang.String getGlossaryIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataplexGlossaryCategoryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a>

---

##### `categoryId`<sup>Required</sup> <a name="categoryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.categoryId"></a>

```java
public java.lang.String getCategoryId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `glossaryId`<sup>Required</sup> <a name="glossaryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexGlossaryCategoryConfig <a name="GoogleDataplexGlossaryCategoryConfig" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategoryConfig;

GoogleDataplexGlossaryCategoryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .parent(java.lang.String)
//  .categoryId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .glossaryId(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexGlossaryCategoryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location where the glossary category should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The immediate parent of the GlossaryCategory in the resource-hierarchy. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.categoryId">categoryId</a></code> | <code>java.lang.String</code> | The category id for creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.description">description</a></code> | <code>java.lang.String</code> | The user-mutable description of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User friendly display name of the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.glossaryId">glossaryId</a></code> | <code>java.lang.String</code> | The glossary id for creation. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#id GoogleDataplexGlossaryCategory#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels for the GlossaryCategory. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#project GoogleDataplexGlossaryCategory#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location where the glossary category should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#location GoogleDataplexGlossaryCategory#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The immediate parent of the GlossaryCategory in the resource-hierarchy.

It can either be a Glossary or a Category. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/categories/{categoryId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#parent GoogleDataplexGlossaryCategory#parent}

---

##### `categoryId`<sup>Optional</sup> <a name="categoryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.categoryId"></a>

```java
public java.lang.String getCategoryId();
```

- *Type:* java.lang.String

The category id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#category_id GoogleDataplexGlossaryCategory#category_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#deletion_policy GoogleDataplexGlossaryCategory#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The user-mutable description of the GlossaryCategory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#description GoogleDataplexGlossaryCategory#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User friendly display name of the GlossaryCategory.

This is user-mutable. This will be same as the categoryId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#display_name GoogleDataplexGlossaryCategory#display_name}

---

##### `glossaryId`<sup>Optional</sup> <a name="glossaryId" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.glossaryId"></a>

```java
public java.lang.String getGlossaryId();
```

- *Type:* java.lang.String

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#glossary_id GoogleDataplexGlossaryCategory#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#id GoogleDataplexGlossaryCategory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels for the GlossaryCategory.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#labels GoogleDataplexGlossaryCategory#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#project GoogleDataplexGlossaryCategory#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryConfig.property.timeouts"></a>

```java
public GoogleDataplexGlossaryCategoryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#timeouts GoogleDataplexGlossaryCategory#timeouts}

---

### GoogleDataplexGlossaryCategoryTimeouts <a name="GoogleDataplexGlossaryCategoryTimeouts" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategoryTimeouts;

GoogleDataplexGlossaryCategoryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#create GoogleDataplexGlossaryCategory#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#delete GoogleDataplexGlossaryCategory#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#update GoogleDataplexGlossaryCategory#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#create GoogleDataplexGlossaryCategory#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#delete GoogleDataplexGlossaryCategory#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_dataplex_glossary_category#update GoogleDataplexGlossaryCategory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexGlossaryCategoryTimeoutsOutputReference <a name="GoogleDataplexGlossaryCategoryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_glossary_category.GoogleDataplexGlossaryCategoryTimeoutsOutputReference;

new GoogleDataplexGlossaryCategoryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexGlossaryCategoryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexGlossaryCategory.GoogleDataplexGlossaryCategoryTimeouts">GoogleDataplexGlossaryCategoryTimeouts</a>

---



