# `googleResourceManagerBoundary` Submodule <a name="`googleResourceManagerBoundary` Submodule" id="@cdktn/provider-google-beta.googleResourceManagerBoundary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleResourceManagerBoundary <a name="GoogleResourceManagerBoundary" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary google_resource_manager_boundary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundary(Construct Scope, string Id, GoogleResourceManagerBoundaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig">GoogleResourceManagerBoundaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig">GoogleResourceManagerBoundaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter">PutResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter">ResetResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceFilter` <a name="PutResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter"></a>

```csharp
private void PutResourceFilter(GoogleResourceManagerBoundaryResourceFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleResourceManagerBoundaryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetResourceFilter` <a name="ResetResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetResourceFilter"></a>

```csharp
private void ResetResourceFilter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleResourceManagerBoundary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleResourceManagerBoundary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleResourceManagerBoundary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleResourceManagerBoundary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleResourceManagerBoundary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject">ManagementProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput">BoundaryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput">ResourceFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId">BoundaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ManagementProject`<sup>Required</sup> <a name="ManagementProject" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.managementProject"></a>

```csharp
public string ManagementProject { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceFilter`<sup>Required</sup> <a name="ResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilter"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilterOutputReference ResourceFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeouts"></a>

```csharp
public GoogleResourceManagerBoundaryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference">GoogleResourceManagerBoundaryTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `BoundaryIdInput`<sup>Optional</sup> <a name="BoundaryIdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryIdInput"></a>

```csharp
public string BoundaryIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ResourceFilterInput`<sup>Optional</sup> <a name="ResourceFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.resourceFilterInput"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilter ResourceFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleResourceManagerBoundaryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---

##### `BoundaryId`<sup>Required</sup> <a name="BoundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.boundaryId"></a>

```csharp
public string BoundaryId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleResourceManagerBoundaryConfig <a name="GoogleResourceManagerBoundaryConfig" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BoundaryId,
    string Parent,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GoogleResourceManagerBoundaryResourceFilter ResourceFilter = null,
    GoogleResourceManagerBoundaryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId">BoundaryId</a></code> | <code>string</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter">ResourceFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BoundaryId`<sup>Required</sup> <a name="BoundaryId" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.boundaryId"></a>

```csharp
public string BoundaryId { get; set; }
```

- *Type:* string

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#boundary_id GoogleResourceManagerBoundary#boundary_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#parent GoogleResourceManagerBoundary#parent}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#deletion_policy GoogleResourceManagerBoundary#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#display_name GoogleResourceManagerBoundary#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#id GoogleResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ResourceFilter`<sup>Optional</sup> <a name="ResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.resourceFilter"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilter ResourceFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#resource_filter GoogleResourceManagerBoundary#resource_filter}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryConfig.property.timeouts"></a>

```csharp
public GoogleResourceManagerBoundaryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#timeouts GoogleResourceManagerBoundary#timeouts}

---

### GoogleResourceManagerBoundaryResourceFilter <a name="GoogleResourceManagerBoundaryResourceFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryResourceFilter {
    GoogleResourceManagerBoundaryResourceFilterTagFilter TagFilter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | tag_filter block. |

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter.property.tagFilter"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilterTagFilter TagFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_filter GoogleResourceManagerBoundary#tag_filter}

---

### GoogleResourceManagerBoundaryResourceFilterTagFilter <a name="GoogleResourceManagerBoundaryResourceFilterTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryResourceFilterTagFilter {
    string TagKey,
    string TagValue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey">TagKey</a></code> | <code>string</code> | The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue">TagValue</a></code> | <code>string</code> | The allowed short name of the tag value, for example 'production'. |

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_key GoogleResourceManagerBoundary#tag_key}

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter.property.tagValue"></a>

```csharp
public string TagValue { get; set; }
```

- *Type:* string

The allowed short name of the tag value, for example 'production'.

A project matches this tag filter if its effective tag value for
the given 'tagKey' matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#tag_value GoogleResourceManagerBoundary#tag_value}

---

### GoogleResourceManagerBoundaryTimeouts <a name="GoogleResourceManagerBoundaryTimeouts" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#create GoogleResourceManagerBoundary#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#delete GoogleResourceManagerBoundary#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_resource_manager_boundary#update GoogleResourceManagerBoundary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleResourceManagerBoundaryResourceFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryResourceFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter">PutTagFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagFilter` <a name="PutTagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter"></a>

```csharp
private void PutTagFilter(GoogleResourceManagerBoundaryResourceFilterTagFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.putTagFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter">TagFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput">TagFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagFilter`<sup>Required</sup> <a name="TagFilter" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference TagFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference">GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference</a>

---

##### `TagFilterInput`<sup>Optional</sup> <a name="TagFilterInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilterTagFilter TagFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilter">GoogleResourceManagerBoundaryResourceFilter</a>

---


### GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference <a name="GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput">TagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagValueInput`<sup>Optional</sup> <a name="TagValueInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput"></a>

```csharp
public string TagValueInput { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleResourceManagerBoundaryResourceFilterTagFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryResourceFilterTagFilter">GoogleResourceManagerBoundaryResourceFilterTagFilter</a>

---


### GoogleResourceManagerBoundaryTimeoutsOutputReference <a name="GoogleResourceManagerBoundaryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleResourceManagerBoundaryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleResourceManagerBoundaryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleResourceManagerBoundary.GoogleResourceManagerBoundaryTimeouts">GoogleResourceManagerBoundaryTimeouts</a>

---



