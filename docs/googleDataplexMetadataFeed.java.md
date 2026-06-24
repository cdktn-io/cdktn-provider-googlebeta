# `googleDataplexMetadataFeed` Submodule <a name="`googleDataplexMetadataFeed` Submodule" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexMetadataFeed <a name="GoogleDataplexMetadataFeed" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeed;

GoogleDataplexMetadataFeed.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .metadataFeedId(java.lang.String)
    .scope(GoogleDataplexMetadataFeedScope)
//  .deletionPolicy(java.lang.String)
//  .filters(GoogleDataplexMetadataFeedFilters)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(GoogleDataplexMetadataFeedTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#location GoogleDataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.metadataFeedId"></a>

- *Type:* java.lang.String

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#metadata_feed_id GoogleDataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#scope GoogleDataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#deletion_policy GoogleDataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#filters GoogleDataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#labels GoogleDataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.pubsubTopic"></a>

- *Type:* java.lang.String

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#pubsub_topic GoogleDataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#timeouts GoogleDataplexMetadataFeed#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters">putFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope">putScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters">resetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic">resetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilters` <a name="putFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters"></a>

```java
public void putFilters(GoogleDataplexMetadataFeedFilters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `putScope` <a name="putScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope"></a>

```java
public void putScope(GoogleDataplexMetadataFeedScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexMetadataFeedTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetFilters` <a name="resetFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters"></a>

```java
public void resetFilters()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject"></a>

```java
public void resetProject()
```

##### `resetPubsubTopic` <a name="resetPubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic"></a>

```java
public void resetPubsubTopic()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeed;

GoogleDataplexMetadataFeed.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeed;

GoogleDataplexMetadataFeed.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeed;

GoogleDataplexMetadataFeed.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeed;

GoogleDataplexMetadataFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexMetadataFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexMetadataFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput">filtersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput">metadataFeedIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput">pubsubTopicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput">scopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters"></a>

```java
public GoogleDataplexMetadataFeedFiltersOutputReference getFilters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope"></a>

```java
public GoogleDataplexMetadataFeedScopeOutputReference getScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts"></a>

```java
public GoogleDataplexMetadataFeedTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `filtersInput`<sup>Optional</sup> <a name="filtersInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput"></a>

```java
public GoogleDataplexMetadataFeedFilters getFiltersInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataFeedIdInput`<sup>Optional</sup> <a name="metadataFeedIdInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput"></a>

```java
public java.lang.String getMetadataFeedIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `pubsubTopicInput`<sup>Optional</sup> <a name="pubsubTopicInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput"></a>

```java
public java.lang.String getPubsubTopicInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput"></a>

```java
public GoogleDataplexMetadataFeedScope getScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataplexMetadataFeedTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId"></a>

```java
public java.lang.String getMetadataFeedId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `pubsubTopic`<sup>Required</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexMetadataFeedConfig <a name="GoogleDataplexMetadataFeedConfig" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedConfig;

GoogleDataplexMetadataFeedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .metadataFeedId(java.lang.String)
    .scope(GoogleDataplexMetadataFeedScope)
//  .deletionPolicy(java.lang.String)
//  .filters(GoogleDataplexMetadataFeedFilters)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .pubsubTopic(java.lang.String)
//  .timeouts(GoogleDataplexMetadataFeedTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId">metadataFeedId</a></code> | <code>java.lang.String</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic">pubsubTopic</a></code> | <code>java.lang.String</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#location GoogleDataplexMetadataFeed#location}

---

##### `metadataFeedId`<sup>Required</sup> <a name="metadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId"></a>

```java
public java.lang.String getMetadataFeedId();
```

- *Type:* java.lang.String

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#metadata_feed_id GoogleDataplexMetadataFeed#metadata_feed_id}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope"></a>

```java
public GoogleDataplexMetadataFeedScope getScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#scope GoogleDataplexMetadataFeed#scope}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#deletion_policy GoogleDataplexMetadataFeed#deletion_policy}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters"></a>

```java
public GoogleDataplexMetadataFeedFilters getFilters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#filters GoogleDataplexMetadataFeed#filters}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#labels GoogleDataplexMetadataFeed#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}.

---

##### `pubsubTopic`<sup>Optional</sup> <a name="pubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic"></a>

```java
public java.lang.String getPubsubTopic();
```

- *Type:* java.lang.String

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#pubsub_topic GoogleDataplexMetadataFeed#pubsub_topic}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts"></a>

```java
public GoogleDataplexMetadataFeedTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#timeouts GoogleDataplexMetadataFeed#timeouts}

---

### GoogleDataplexMetadataFeedFilters <a name="GoogleDataplexMetadataFeedFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedFilters;

GoogleDataplexMetadataFeedFilters.builder()
//  .aspectTypes(java.util.List<java.lang.String>)
//  .changeTypes(java.util.List<java.lang.String>)
//  .entryTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes">aspectTypes</a></code> | <code>java.util.List<java.lang.String></code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes">changeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes">entryTypes</a></code> | <code>java.util.List<java.lang.String></code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `aspectTypes`<sup>Optional</sup> <a name="aspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes"></a>

```java
public java.util.List<java.lang.String> getAspectTypes();
```

- *Type:* java.util.List<java.lang.String>

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#aspect_types GoogleDataplexMetadataFeed#aspect_types}

---

##### `changeTypes`<sup>Optional</sup> <a name="changeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes"></a>

```java
public java.util.List<java.lang.String> getChangeTypes();
```

- *Type:* java.util.List<java.lang.String>

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#change_types GoogleDataplexMetadataFeed#change_types}

---

##### `entryTypes`<sup>Optional</sup> <a name="entryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes"></a>

```java
public java.util.List<java.lang.String> getEntryTypes();
```

- *Type:* java.util.List<java.lang.String>

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_types GoogleDataplexMetadataFeed#entry_types}

---

### GoogleDataplexMetadataFeedScope <a name="GoogleDataplexMetadataFeedScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedScope;

GoogleDataplexMetadataFeedScope.builder()
//  .entryGroups(java.util.List<java.lang.String>)
//  .organizationLevel(java.lang.Boolean|IResolvable)
//  .projects(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups">entryGroups</a></code> | <code>java.util.List<java.lang.String></code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel">organizationLevel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | The projects whose entries you want to listen to. |

---

##### `entryGroups`<sup>Optional</sup> <a name="entryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups"></a>

```java
public java.util.List<java.lang.String> getEntryGroups();
```

- *Type:* java.util.List<java.lang.String>

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_groups GoogleDataplexMetadataFeed#entry_groups}

---

##### `organizationLevel`<sup>Optional</sup> <a name="organizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#organization_level GoogleDataplexMetadataFeed#organization_level}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#projects GoogleDataplexMetadataFeed#projects}

---

### GoogleDataplexMetadataFeedTimeouts <a name="GoogleDataplexMetadataFeedTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedTimeouts;

GoogleDataplexMetadataFeedTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexMetadataFeedFiltersOutputReference <a name="GoogleDataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedFiltersOutputReference;

new GoogleDataplexMetadataFeedFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes">resetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes">resetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes">resetEntryTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAspectTypes` <a name="resetAspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```java
public void resetAspectTypes()
```

##### `resetChangeTypes` <a name="resetChangeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```java
public void resetChangeTypes()
```

##### `resetEntryTypes` <a name="resetEntryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```java
public void resetEntryTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">aspectTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">changeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">entryTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes">aspectTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes">changeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes">entryTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectTypesInput`<sup>Optional</sup> <a name="aspectTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```java
public java.util.List<java.lang.String> getAspectTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeTypesInput`<sup>Optional</sup> <a name="changeTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```java
public java.util.List<java.lang.String> getChangeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryTypesInput`<sup>Optional</sup> <a name="entryTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```java
public java.util.List<java.lang.String> getEntryTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aspectTypes`<sup>Required</sup> <a name="aspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```java
public java.util.List<java.lang.String> getAspectTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `changeTypes`<sup>Required</sup> <a name="changeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```java
public java.util.List<java.lang.String> getChangeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryTypes`<sup>Required</sup> <a name="entryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```java
public java.util.List<java.lang.String> getEntryTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```java
public GoogleDataplexMetadataFeedFilters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---


### GoogleDataplexMetadataFeedScopeOutputReference <a name="GoogleDataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedScopeOutputReference;

new GoogleDataplexMetadataFeedScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups">resetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">resetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects">resetProjects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntryGroups` <a name="resetEntryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```java
public void resetEntryGroups()
```

##### `resetOrganizationLevel` <a name="resetOrganizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```java
public void resetOrganizationLevel()
```

##### `resetProjects` <a name="resetProjects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```java
public void resetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">entryGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">organizationLevelInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput">projectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups">entryGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel">organizationLevel</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects">projects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entryGroupsInput`<sup>Optional</sup> <a name="entryGroupsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```java
public java.util.List<java.lang.String> getEntryGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationLevelInput`<sup>Optional</sup> <a name="organizationLevelInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevelInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectsInput`<sup>Optional</sup> <a name="projectsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```java
public java.util.List<java.lang.String> getProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entryGroups`<sup>Required</sup> <a name="entryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```java
public java.util.List<java.lang.String> getEntryGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationLevel`<sup>Required</sup> <a name="organizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```java
public java.lang.Boolean|IResolvable getOrganizationLevel();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects"></a>

```java
public java.util.List<java.lang.String> getProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```java
public GoogleDataplexMetadataFeedScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---


### GoogleDataplexMetadataFeedTimeoutsOutputReference <a name="GoogleDataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_metadata_feed.GoogleDataplexMetadataFeedTimeoutsOutputReference;

new GoogleDataplexMetadataFeedTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexMetadataFeedTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---



