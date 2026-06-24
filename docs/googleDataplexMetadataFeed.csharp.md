# `googleDataplexMetadataFeed` Submodule <a name="`googleDataplexMetadataFeed` Submodule" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexMetadataFeed <a name="GoogleDataplexMetadataFeed" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeed(Construct Scope, string Id, GoogleDataplexMetadataFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig">GoogleDataplexMetadataFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig">GoogleDataplexMetadataFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters"></a>

```csharp
private void PutFilters(GoogleDataplexMetadataFeedFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope"></a>

```csharp
private void PutScope(GoogleDataplexMetadataFeedScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexMetadataFeedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetPubsubTopic"></a>

```csharp
private void ResetPubsubTopic()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexMetadataFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexMetadataFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexMetadataFeed.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexMetadataFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexMetadataFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput">MetadataFeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId">MetadataFeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filters"></a>

```csharp
public GoogleDataplexMetadataFeedFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference">GoogleDataplexMetadataFeedFiltersOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scope"></a>

```csharp
public GoogleDataplexMetadataFeedScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference">GoogleDataplexMetadataFeedScopeOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeouts"></a>

```csharp
public GoogleDataplexMetadataFeedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference">GoogleDataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.filtersInput"></a>

```csharp
public GoogleDataplexMetadataFeedFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataFeedIdInput`<sup>Optional</sup> <a name="MetadataFeedIdInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedIdInput"></a>

```csharp
public string MetadataFeedIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.scopeInput"></a>

```csharp
public GoogleDataplexMetadataFeedScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataplexMetadataFeedTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.metadataFeedId"></a>

```csharp
public string MetadataFeedId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexMetadataFeedConfig <a name="GoogleDataplexMetadataFeedConfig" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MetadataFeedId,
    GoogleDataplexMetadataFeedScope Scope,
    string DeletionPolicy = null,
    GoogleDataplexMetadataFeedFilters Filters = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string PubsubTopic = null,
    GoogleDataplexMetadataFeedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId">MetadataFeedId</a></code> | <code>string</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#location GoogleDataplexMetadataFeed#location}

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.metadataFeedId"></a>

```csharp
public string MetadataFeedId { get; set; }
```

- *Type:* string

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#metadata_feed_id GoogleDataplexMetadataFeed#metadata_feed_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.scope"></a>

```csharp
public GoogleDataplexMetadataFeedScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#scope GoogleDataplexMetadataFeed#scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#deletion_policy GoogleDataplexMetadataFeed#deletion_policy}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.filters"></a>

```csharp
public GoogleDataplexMetadataFeedFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#filters GoogleDataplexMetadataFeed#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#id GoogleDataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#labels GoogleDataplexMetadataFeed#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#project GoogleDataplexMetadataFeed#project}.

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#pubsub_topic GoogleDataplexMetadataFeed#pubsub_topic}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedConfig.property.timeouts"></a>

```csharp
public GoogleDataplexMetadataFeedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#timeouts GoogleDataplexMetadataFeed#timeouts}

---

### GoogleDataplexMetadataFeedFilters <a name="GoogleDataplexMetadataFeedFilters" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedFilters {
    string[] AspectTypes = null,
    string[] ChangeTypes = null,
    string[] EntryTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes">AspectTypes</a></code> | <code>string[]</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes">ChangeTypes</a></code> | <code>string[]</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes">EntryTypes</a></code> | <code>string[]</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `AspectTypes`<sup>Optional</sup> <a name="AspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.aspectTypes"></a>

```csharp
public string[] AspectTypes { get; set; }
```

- *Type:* string[]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#aspect_types GoogleDataplexMetadataFeed#aspect_types}

---

##### `ChangeTypes`<sup>Optional</sup> <a name="ChangeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.changeTypes"></a>

```csharp
public string[] ChangeTypes { get; set; }
```

- *Type:* string[]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#change_types GoogleDataplexMetadataFeed#change_types}

---

##### `EntryTypes`<sup>Optional</sup> <a name="EntryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters.property.entryTypes"></a>

```csharp
public string[] EntryTypes { get; set; }
```

- *Type:* string[]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_types GoogleDataplexMetadataFeed#entry_types}

---

### GoogleDataplexMetadataFeedScope <a name="GoogleDataplexMetadataFeedScope" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedScope {
    string[] EntryGroups = null,
    bool|IResolvable OrganizationLevel = null,
    string[] Projects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups">EntryGroups</a></code> | <code>string[]</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel">OrganizationLevel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects">Projects</a></code> | <code>string[]</code> | The projects whose entries you want to listen to. |

---

##### `EntryGroups`<sup>Optional</sup> <a name="EntryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.entryGroups"></a>

```csharp
public string[] EntryGroups { get; set; }
```

- *Type:* string[]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#entry_groups GoogleDataplexMetadataFeed#entry_groups}

---

##### `OrganizationLevel`<sup>Optional</sup> <a name="OrganizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.organizationLevel"></a>

```csharp
public bool|IResolvable OrganizationLevel { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#organization_level GoogleDataplexMetadataFeed#organization_level}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#projects GoogleDataplexMetadataFeed#projects}

---

### GoogleDataplexMetadataFeedTimeouts <a name="GoogleDataplexMetadataFeedTimeouts" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#create GoogleDataplexMetadataFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#delete GoogleDataplexMetadataFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_dataplex_metadata_feed#update GoogleDataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexMetadataFeedFiltersOutputReference <a name="GoogleDataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes">ResetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes">ResetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes">ResetEntryTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAspectTypes` <a name="ResetAspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```csharp
private void ResetAspectTypes()
```

##### `ResetChangeTypes` <a name="ResetChangeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```csharp
private void ResetChangeTypes()
```

##### `ResetEntryTypes` <a name="ResetEntryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```csharp
private void ResetEntryTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">AspectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">ChangeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">EntryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes">AspectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes">ChangeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes">EntryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectTypesInput`<sup>Optional</sup> <a name="AspectTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```csharp
public string[] AspectTypesInput { get; }
```

- *Type:* string[]

---

##### `ChangeTypesInput`<sup>Optional</sup> <a name="ChangeTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```csharp
public string[] ChangeTypesInput { get; }
```

- *Type:* string[]

---

##### `EntryTypesInput`<sup>Optional</sup> <a name="EntryTypesInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```csharp
public string[] EntryTypesInput { get; }
```

- *Type:* string[]

---

##### `AspectTypes`<sup>Required</sup> <a name="AspectTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```csharp
public string[] AspectTypes { get; }
```

- *Type:* string[]

---

##### `ChangeTypes`<sup>Required</sup> <a name="ChangeTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```csharp
public string[] ChangeTypes { get; }
```

- *Type:* string[]

---

##### `EntryTypes`<sup>Required</sup> <a name="EntryTypes" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```csharp
public string[] EntryTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexMetadataFeedFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedFilters">GoogleDataplexMetadataFeedFilters</a>

---


### GoogleDataplexMetadataFeedScopeOutputReference <a name="GoogleDataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups">ResetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">ResetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryGroups` <a name="ResetEntryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```csharp
private void ResetEntryGroups()
```

##### `ResetOrganizationLevel` <a name="ResetOrganizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```csharp
private void ResetOrganizationLevel()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">EntryGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">OrganizationLevelInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups">EntryGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel">OrganizationLevel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryGroupsInput`<sup>Optional</sup> <a name="EntryGroupsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```csharp
public string[] EntryGroupsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationLevelInput`<sup>Optional</sup> <a name="OrganizationLevelInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```csharp
public bool|IResolvable OrganizationLevelInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `EntryGroups`<sup>Required</sup> <a name="EntryGroups" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```csharp
public string[] EntryGroups { get; }
```

- *Type:* string[]

---

##### `OrganizationLevel`<sup>Required</sup> <a name="OrganizationLevel" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```csharp
public bool|IResolvable OrganizationLevel { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexMetadataFeedScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedScope">GoogleDataplexMetadataFeedScope</a>

---


### GoogleDataplexMetadataFeedTimeoutsOutputReference <a name="GoogleDataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexMetadataFeedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexMetadataFeedTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexMetadataFeed.GoogleDataplexMetadataFeedTimeouts">GoogleDataplexMetadataFeedTimeouts</a>

---



