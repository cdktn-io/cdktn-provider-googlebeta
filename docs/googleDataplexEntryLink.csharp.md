# `googleDataplexEntryLink` Submodule <a name="`googleDataplexEntryLink` Submodule" id="@cdktn/provider-google-beta.googleDataplexEntryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntryLink <a name="GoogleDataplexEntryLink" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link google_dataplex_entry_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLink(Construct Scope, string Id, GoogleDataplexEntryLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig">GoogleDataplexEntryLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig">GoogleDataplexEntryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects">PutAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences">PutEntryReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetAspects">ResetAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAspects` <a name="PutAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects"></a>

```csharp
private void PutAspects(IResolvable|GoogleDataplexEntryLinkAspects[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]

---

##### `PutEntryReferences` <a name="PutEntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences"></a>

```csharp
private void PutEntryReferences(IResolvable|GoogleDataplexEntryLinkEntryReferences[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexEntryLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---

##### `ResetAspects` <a name="ResetAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetAspects"></a>

```csharp
private void ResetAspects()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexEntryLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataplexEntryLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataplexEntryLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexEntryLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexEntryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspects">Aspects</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList">GoogleDataplexEntryLinkAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferences">EntryReferences</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList">GoogleDataplexEntryLinkEntryReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference">GoogleDataplexEntryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspectsInput">AspectsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupIdInput">EntryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkIdInput">EntryLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkTypeInput">EntryLinkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferencesInput">EntryReferencesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkId">EntryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkType">EntryLinkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Aspects`<sup>Required</sup> <a name="Aspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspects"></a>

```csharp
public GoogleDataplexEntryLinkAspectsList Aspects { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList">GoogleDataplexEntryLinkAspectsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EntryReferences`<sup>Required</sup> <a name="EntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferences"></a>

```csharp
public GoogleDataplexEntryLinkEntryReferencesList EntryReferences { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList">GoogleDataplexEntryLinkEntryReferencesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeouts"></a>

```csharp
public GoogleDataplexEntryLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference">GoogleDataplexEntryLinkTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AspectsInput`<sup>Optional</sup> <a name="AspectsInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspectsInput"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkAspects[] AspectsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EntryGroupIdInput`<sup>Optional</sup> <a name="EntryGroupIdInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupIdInput"></a>

```csharp
public string EntryGroupIdInput { get; }
```

- *Type:* string

---

##### `EntryLinkIdInput`<sup>Optional</sup> <a name="EntryLinkIdInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkIdInput"></a>

```csharp
public string EntryLinkIdInput { get; }
```

- *Type:* string

---

##### `EntryLinkTypeInput`<sup>Optional</sup> <a name="EntryLinkTypeInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkTypeInput"></a>

```csharp
public string EntryLinkTypeInput { get; }
```

- *Type:* string

---

##### `EntryReferencesInput`<sup>Optional</sup> <a name="EntryReferencesInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferencesInput"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkEntryReferences[] EntryReferencesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; }
```

- *Type:* string

---

##### `EntryLinkId`<sup>Required</sup> <a name="EntryLinkId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkId"></a>

```csharp
public string EntryLinkId { get; }
```

- *Type:* string

---

##### `EntryLinkType`<sup>Required</sup> <a name="EntryLinkType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkType"></a>

```csharp
public string EntryLinkType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryLinkAspects <a name="GoogleDataplexEntryLinkAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkAspects {
    GoogleDataplexEntryLinkAspectsAspect Aspect,
    string AspectKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspect">Aspect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspectKey">AspectKey</a></code> | <code>string</code> | The map keys of the Aspects which the service should modify. |

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspect"></a>

```csharp
public GoogleDataplexEntryLinkAspectsAspect Aspect { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#aspect GoogleDataplexEntryLink#aspect}

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspectKey"></a>

```csharp
public string AspectKey { get; set; }
```

- *Type:* string

The map keys of the Aspects which the service should modify.

It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#aspect_key GoogleDataplexEntryLink#aspect_key}

---

### GoogleDataplexEntryLinkAspectsAspect <a name="GoogleDataplexEntryLinkAspectsAspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkAspectsAspect {
    string Data
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.property.data">Data</a></code> | <code>string</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.property.data"></a>

```csharp
public string Data { get; set; }
```

- *Type:* string

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#data GoogleDataplexEntryLink#data}

---

### GoogleDataplexEntryLinkConfig <a name="GoogleDataplexEntryLinkConfig" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EntryGroupId,
    string EntryLinkId,
    string EntryLinkType,
    IResolvable|GoogleDataplexEntryLinkEntryReferences[] EntryReferences,
    string Location,
    IResolvable|GoogleDataplexEntryLinkAspects[] Aspects = null,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    GoogleDataplexEntryLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryGroupId">EntryGroupId</a></code> | <code>string</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkId">EntryLinkId</a></code> | <code>string</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkType">EntryLinkType</a></code> | <code>string</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryReferences">EntryReferences</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]</code> | entry_references block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.location">Location</a></code> | <code>string</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.aspects">Aspects</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]</code> | aspects block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntryGroupId`<sup>Required</sup> <a name="EntryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryGroupId"></a>

```csharp
public string EntryGroupId { get; set; }
```

- *Type:* string

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#entry_group_id GoogleDataplexEntryLink#entry_group_id}

---

##### `EntryLinkId`<sup>Required</sup> <a name="EntryLinkId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkId"></a>

```csharp
public string EntryLinkId { get; set; }
```

- *Type:* string

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#entry_link_id GoogleDataplexEntryLink#entry_link_id}

---

##### `EntryLinkType`<sup>Required</sup> <a name="EntryLinkType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkType"></a>

```csharp
public string EntryLinkType { get; set; }
```

- *Type:* string

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#entry_link_type GoogleDataplexEntryLink#entry_link_type}

---

##### `EntryReferences`<sup>Required</sup> <a name="EntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryReferences"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkEntryReferences[] EntryReferences { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#entry_references GoogleDataplexEntryLink#entry_references}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#location GoogleDataplexEntryLink#location}

---

##### `Aspects`<sup>Optional</sup> <a name="Aspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.aspects"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkAspects[] Aspects { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#aspects GoogleDataplexEntryLink#aspects}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#deletion_policy GoogleDataplexEntryLink#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.timeouts"></a>

```csharp
public GoogleDataplexEntryLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#timeouts GoogleDataplexEntryLink#timeouts}

---

### GoogleDataplexEntryLinkEntryReferences <a name="GoogleDataplexEntryLinkEntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkEntryReferences {
    string Name,
    string Path = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.name">Name</a></code> | <code>string</code> | The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.path">Path</a></code> | <code>string</code> | The path in the Entry that is referenced in the Entry Link. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.type">Type</a></code> | <code>string</code> | The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#name GoogleDataplexEntryLink#name}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path in the Entry that is referenced in the Entry Link.

Empty path denotes that the Entry itself is referenced in the Entry Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#path GoogleDataplexEntryLink#path}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The reference type of the Entry. Possible values: ["SOURCE", "TARGET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#type GoogleDataplexEntryLink#type}

---

### GoogleDataplexEntryLinkTimeouts <a name="GoogleDataplexEntryLinkTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#create GoogleDataplexEntryLink#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#delete GoogleDataplexEntryLink#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#update GoogleDataplexEntryLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#create GoogleDataplexEntryLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#delete GoogleDataplexEntryLink#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_dataplex_entry_link#update GoogleDataplexEntryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryLinkAspectsAspectOutputReference <a name="GoogleDataplexEntryLinkAspectsAspectOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkAspectsAspectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.aspectType">AspectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.dataInput">DataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.data">Data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectType`<sup>Required</sup> <a name="AspectType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.aspectType"></a>

```csharp
public string AspectType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.dataInput"></a>

```csharp
public string DataInput { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.data"></a>

```csharp
public string Data { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexEntryLinkAspectsAspect InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---


### GoogleDataplexEntryLinkAspectsList <a name="GoogleDataplexEntryLinkAspectsList" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkAspectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get"></a>

```csharp
private GoogleDataplexEntryLinkAspectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkAspects[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>[]

---


### GoogleDataplexEntryLinkAspectsOutputReference <a name="GoogleDataplexEntryLinkAspectsOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkAspectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect">PutAspect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAspect` <a name="PutAspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect"></a>

```csharp
private void PutAspect(GoogleDataplexEntryLinkAspectsAspect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspect">Aspect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference">GoogleDataplexEntryLinkAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectInput">AspectInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKeyInput">AspectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKey">AspectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aspect`<sup>Required</sup> <a name="Aspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspect"></a>

```csharp
public GoogleDataplexEntryLinkAspectsAspectOutputReference Aspect { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference">GoogleDataplexEntryLinkAspectsAspectOutputReference</a>

---

##### `AspectInput`<sup>Optional</sup> <a name="AspectInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectInput"></a>

```csharp
public GoogleDataplexEntryLinkAspectsAspect AspectInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---

##### `AspectKeyInput`<sup>Optional</sup> <a name="AspectKeyInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKeyInput"></a>

```csharp
public string AspectKeyInput { get; }
```

- *Type:* string

---

##### `AspectKey`<sup>Required</sup> <a name="AspectKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKey"></a>

```csharp
public string AspectKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkAspects InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>

---


### GoogleDataplexEntryLinkEntryReferencesList <a name="GoogleDataplexEntryLinkEntryReferencesList" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkEntryReferencesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get"></a>

```csharp
private GoogleDataplexEntryLinkEntryReferencesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkEntryReferences[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>[]

---


### GoogleDataplexEntryLinkEntryReferencesOutputReference <a name="GoogleDataplexEntryLinkEntryReferencesOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkEntryReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkEntryReferences InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>

---


### GoogleDataplexEntryLinkTimeoutsOutputReference <a name="GoogleDataplexEntryLinkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataplexEntryLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataplexEntryLinkTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---



