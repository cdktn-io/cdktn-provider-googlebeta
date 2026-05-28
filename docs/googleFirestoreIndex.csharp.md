# `googleFirestoreIndex` Submodule <a name="`googleFirestoreIndex` Submodule" id="@cdktn/provider-google-beta.googleFirestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirestoreIndex <a name="GoogleFirestoreIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndex(Construct Scope, string Id, GoogleFirestoreIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig">GoogleFirestoreIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope">ResetApiScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDensity">ResetDensity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetMultikey">ResetMultikey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope">ResetQueryScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetSkipWait">ResetSkipWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetUnique">ResetUnique</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields"></a>

```csharp
private void PutFields(IResolvable|GoogleFirestoreIndexFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirestoreIndexTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `ResetApiScope` <a name="ResetApiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetApiScope"></a>

```csharp
private void ResetApiScope()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDensity` <a name="ResetDensity" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetDensity"></a>

```csharp
private void ResetDensity()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMultikey` <a name="ResetMultikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetMultikey"></a>

```csharp
private void ResetMultikey()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQueryScope` <a name="ResetQueryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetQueryScope"></a>

```csharp
private void ResetQueryScope()
```

##### `ResetSkipWait` <a name="ResetSkipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetSkipWait"></a>

```csharp
private void ResetSkipWait()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.resetUnique"></a>

```csharp
private void ResetUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirestoreIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirestoreIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirestoreIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirestoreIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirestoreIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleFirestoreIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirestoreIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput">ApiScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput">CollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.densityInput">DensityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikeyInput">MultikeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput">QueryScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWaitInput">SkipWaitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.uniqueInput">UniqueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope">ApiScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection">Collection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.density">Density</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikey">Multikey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope">QueryScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWait">SkipWait</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.unique">Unique</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fields"></a>

```csharp
public GoogleFirestoreIndexFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList">GoogleFirestoreIndexFieldsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeouts"></a>

```csharp
public GoogleFirestoreIndexTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference">GoogleFirestoreIndexTimeoutsOutputReference</a>

---

##### `ApiScopeInput`<sup>Optional</sup> <a name="ApiScopeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScopeInput"></a>

```csharp
public string ApiScopeInput { get; }
```

- *Type:* string

---

##### `CollectionInput`<sup>Optional</sup> <a name="CollectionInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collectionInput"></a>

```csharp
public string CollectionInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DensityInput`<sup>Optional</sup> <a name="DensityInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.densityInput"></a>

```csharp
public string DensityInput { get; }
```

- *Type:* string

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.fieldsInput"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MultikeyInput`<sup>Optional</sup> <a name="MultikeyInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikeyInput"></a>

```csharp
public bool|IResolvable MultikeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryScopeInput`<sup>Optional</sup> <a name="QueryScopeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScopeInput"></a>

```csharp
public string QueryScopeInput { get; }
```

- *Type:* string

---

##### `SkipWaitInput`<sup>Optional</sup> <a name="SkipWaitInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWaitInput"></a>

```csharp
public bool|IResolvable SkipWaitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleFirestoreIndexTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.uniqueInput"></a>

```csharp
public bool|IResolvable UniqueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiScope`<sup>Required</sup> <a name="ApiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.apiScope"></a>

```csharp
public string ApiScope { get; }
```

- *Type:* string

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.collection"></a>

```csharp
public string Collection { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Density`<sup>Required</sup> <a name="Density" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.density"></a>

```csharp
public string Density { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Multikey`<sup>Required</sup> <a name="Multikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.multikey"></a>

```csharp
public bool|IResolvable Multikey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QueryScope`<sup>Required</sup> <a name="QueryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.queryScope"></a>

```csharp
public string QueryScope { get; }
```

- *Type:* string

---

##### `SkipWait`<sup>Required</sup> <a name="SkipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.skipWait"></a>

```csharp
public bool|IResolvable SkipWait { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.unique"></a>

```csharp
public bool|IResolvable Unique { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirestoreIndexConfig <a name="GoogleFirestoreIndexConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Collection,
    IResolvable|GoogleFirestoreIndexFields[] Fields,
    string ApiScope = null,
    string Database = null,
    string DeletionPolicy = null,
    string Density = null,
    string Id = null,
    bool|IResolvable Multikey = null,
    string Project = null,
    string QueryScope = null,
    bool|IResolvable SkipWait = null,
    GoogleFirestoreIndexTimeouts Timeouts = null,
    bool|IResolvable Unique = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection">Collection</a></code> | <code>string</code> | The collection being indexed. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope">ApiScope</a></code> | <code>string</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database">Database</a></code> | <code>string</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.density">Density</a></code> | <code>string</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.multikey">Multikey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope">QueryScope</a></code> | <code>string</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.skipWait">SkipWait</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to skip waiting for the index to be created. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.unique">Unique</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Collection`<sup>Required</sup> <a name="Collection" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.collection"></a>

```csharp
public string Collection { get; set; }
```

- *Type:* string

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.fields"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}

---

##### `ApiScope`<sup>Optional</sup> <a name="ApiScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.apiScope"></a>

```csharp
public string ApiScope { get; set; }
```

- *Type:* string

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#deletion_policy GoogleFirestoreIndex#deletion_policy}

---

##### `Density`<sup>Optional</sup> <a name="Density" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.density"></a>

```csharp
public string Density { get; set; }
```

- *Type:* string

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#density GoogleFirestoreIndex#density}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Multikey`<sup>Optional</sup> <a name="Multikey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.multikey"></a>

```csharp
public bool|IResolvable Multikey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#multikey GoogleFirestoreIndex#multikey}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}.

---

##### `QueryScope`<sup>Optional</sup> <a name="QueryScope" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.queryScope"></a>

```csharp
public string QueryScope { get; set; }
```

- *Type:* string

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}

---

##### `SkipWait`<sup>Optional</sup> <a name="SkipWait" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.skipWait"></a>

```csharp
public bool|IResolvable SkipWait { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to skip waiting for the index to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#skip_wait GoogleFirestoreIndex#skip_wait}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.timeouts"></a>

```csharp
public GoogleFirestoreIndexTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexConfig.property.unique"></a>

```csharp
public bool|IResolvable Unique { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#unique GoogleFirestoreIndex#unique}

---

### GoogleFirestoreIndexFields <a name="GoogleFirestoreIndexFields" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFields {
    string ArrayConfig = null,
    string FieldPath = null,
    string Order = null,
    GoogleFirestoreIndexFieldsSearchConfig SearchConfig = null,
    GoogleFirestoreIndexFieldsVectorConfig VectorConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath">FieldPath</a></code> | <code>string</code> | Name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order">Order</a></code> | <code>string</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.searchConfig">SearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | search_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `ArrayConfig`<sup>Optional</sup> <a name="ArrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; set; }
```

- *Type:* string

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', 'searchConfig' and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#array_config GoogleFirestoreIndex#array_config}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#field_path GoogleFirestoreIndex#field_path}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.order"></a>

```csharp
public string Order { get; set; }
```

- *Type:* string

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', 'searchConfig' and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#order GoogleFirestoreIndex#order}

---

##### `SearchConfig`<sup>Optional</sup> <a name="SearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.searchConfig"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfig SearchConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#search_config GoogleFirestoreIndex#search_config}

---

##### `VectorConfig`<sup>Optional</sup> <a name="VectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields.property.vectorConfig"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfig VectorConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#vector_config GoogleFirestoreIndex#vector_config}

---

### GoogleFirestoreIndexFieldsSearchConfig <a name="GoogleFirestoreIndexFieldsSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfig {
    GoogleFirestoreIndexFieldsSearchConfigGeoSpec GeoSpec = null,
    GoogleFirestoreIndexFieldsSearchConfigTextSpec TextSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.geoSpec">GeoSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | geo_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.textSpec">TextSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | text_spec block. |

---

##### `GeoSpec`<sup>Optional</sup> <a name="GeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.geoSpec"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec GeoSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

geo_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#geo_spec GoogleFirestoreIndex#geo_spec}

---

##### `TextSpec`<sup>Optional</sup> <a name="TextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig.property.textSpec"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigTextSpec TextSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

text_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#text_spec GoogleFirestoreIndex#text_spec}

---

### GoogleFirestoreIndexFieldsSearchConfigGeoSpec <a name="GoogleFirestoreIndexFieldsSearchConfigGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigGeoSpec {
    bool|IResolvable GeoJsonIndexingDisabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled">GeoJsonIndexingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, disables GeoJSON indexing for the field. |

---

##### `GeoJsonIndexingDisabled`<sup>Required</sup> <a name="GeoJsonIndexingDisabled" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec.property.geoJsonIndexingDisabled"></a>

```csharp
public bool|IResolvable GeoJsonIndexingDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, disables GeoJSON indexing for the field.

By default, GeoJSON points are indexed.
Firestore GeoPoints are indexed regardless of the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#geo_json_indexing_disabled GoogleFirestoreIndex#geo_json_indexing_disabled}

---

### GoogleFirestoreIndexFieldsSearchConfigTextSpec <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigTextSpec {
    IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] IndexSpecs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs">IndexSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | index_specs block. |

---

##### `IndexSpecs`<sup>Required</sup> <a name="IndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec.property.indexSpecs"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] IndexSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

index_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#index_specs GoogleFirestoreIndex#index_specs}

---

### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs {
    string IndexType = null,
    string MatchType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType">IndexType</a></code> | <code>string</code> | Ways to index the text field value. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType">MatchType</a></code> | <code>string</code> | How to match the text field value. |

---

##### `IndexType`<sup>Optional</sup> <a name="IndexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.indexType"></a>

```csharp
public string IndexType { get; set; }
```

- *Type:* string

Ways to index the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#index_type GoogleFirestoreIndex#index_type}

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

How to match the text field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#match_type GoogleFirestoreIndex#match_type}

---

### GoogleFirestoreIndexFieldsVectorConfig <a name="GoogleFirestoreIndexFieldsVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsVectorConfig {
    double Dimension = null,
    GoogleFirestoreIndexFieldsVectorConfigFlat Flat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension">Dimension</a></code> | <code>double</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.dimension"></a>

```csharp
public double Dimension { get; set; }
```

- *Type:* double

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#dimension GoogleFirestoreIndex#dimension}

---

##### `Flat`<sup>Optional</sup> <a name="Flat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig.property.flat"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfigFlat Flat { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#flat GoogleFirestoreIndex#flat}

---

### GoogleFirestoreIndexFieldsVectorConfigFlat <a name="GoogleFirestoreIndexFieldsVectorConfigFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsVectorConfigFlat {

};
```


### GoogleFirestoreIndexTimeouts <a name="GoogleFirestoreIndexTimeouts" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#update GoogleFirestoreIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_firestore_index#update GoogleFirestoreIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirestoreIndexFieldsList <a name="GoogleFirestoreIndexFieldsList" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get"></a>

```csharp
private GoogleFirestoreIndexFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>[]

---


### GoogleFirestoreIndexFieldsOutputReference <a name="GoogleFirestoreIndexFieldsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig">PutSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig">PutVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig">ResetArrayConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetSearchConfig">ResetSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig">ResetVectorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSearchConfig` <a name="PutSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig"></a>

```csharp
private void PutSearchConfig(GoogleFirestoreIndexFieldsSearchConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---

##### `PutVectorConfig` <a name="PutVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```csharp
private void PutVectorConfig(GoogleFirestoreIndexFieldsVectorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.putVectorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `ResetArrayConfig` <a name="ResetArrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```csharp
private void ResetArrayConfig()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetOrder"></a>

```csharp
private void ResetOrder()
```

##### `ResetSearchConfig` <a name="ResetSearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetSearchConfig"></a>

```csharp
private void ResetSearchConfig()
```

##### `ResetVectorConfig` <a name="ResetVectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```csharp
private void ResetVectorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfig">SearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference">GoogleFirestoreIndexFieldsSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig">VectorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput">ArrayConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput">OrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfigInput">SearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput">VectorConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig">ArrayConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order">Order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SearchConfig`<sup>Required</sup> <a name="SearchConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfig"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigOutputReference SearchConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference">GoogleFirestoreIndexFieldsSearchConfigOutputReference</a>

---

##### `VectorConfig`<sup>Required</sup> <a name="VectorConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfigOutputReference VectorConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference">GoogleFirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `ArrayConfigInput`<sup>Optional</sup> <a name="ArrayConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```csharp
public string ArrayConfigInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.orderInput"></a>

```csharp
public string OrderInput { get; }
```

- *Type:* string

---

##### `SearchConfigInput`<sup>Optional</sup> <a name="SearchConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.searchConfigInput"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfig SearchConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---

##### `VectorConfigInput`<sup>Optional</sup> <a name="VectorConfigInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfig VectorConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---

##### `ArrayConfig`<sup>Required</sup> <a name="ArrayConfig" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```csharp
public string ArrayConfig { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.order"></a>

```csharp
public string Order { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFields">GoogleFirestoreIndexFields</a>

---


### GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput">GeoJsonIndexingDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled">GeoJsonIndexingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoJsonIndexingDisabledInput`<sup>Optional</sup> <a name="GeoJsonIndexingDisabledInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabledInput"></a>

```csharp
public bool|IResolvable GeoJsonIndexingDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeoJsonIndexingDisabled`<sup>Required</sup> <a name="GeoJsonIndexingDisabled" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.geoJsonIndexingDisabled"></a>

```csharp
public bool|IResolvable GeoJsonIndexingDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---


### GoogleFirestoreIndexFieldsSearchConfigOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec">PutGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec">PutTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec">ResetGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec">ResetTextSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoSpec` <a name="PutGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec"></a>

```csharp
private void PutGeoSpec(GoogleFirestoreIndexFieldsSearchConfigGeoSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putGeoSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `PutTextSpec` <a name="PutTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec"></a>

```csharp
private void PutTextSpec(GoogleFirestoreIndexFieldsSearchConfigTextSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.putTextSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `ResetGeoSpec` <a name="ResetGeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetGeoSpec"></a>

```csharp
private void ResetGeoSpec()
```

##### `ResetTextSpec` <a name="ResetTextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.resetTextSpec"></a>

```csharp
private void ResetTextSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec">GeoSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpec">TextSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput">GeoSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput">TextSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoSpec`<sup>Required</sup> <a name="GeoSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpec"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference GeoSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigGeoSpecOutputReference</a>

---

##### `TextSpec`<sup>Required</sup> <a name="TextSpec" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpec"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference TextSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference">GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference</a>

---

##### `GeoSpecInput`<sup>Optional</sup> <a name="GeoSpecInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.geoSpecInput"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigGeoSpec GeoSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigGeoSpec">GoogleFirestoreIndexFieldsSearchConfigGeoSpec</a>

---

##### `TextSpecInput`<sup>Optional</sup> <a name="TextSpecInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.textSpecInput"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigTextSpec TextSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfig">GoogleFirestoreIndexFieldsSearchConfig</a>

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get"></a>

```csharp
private GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType">ResetIndexType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType">ResetMatchType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIndexType` <a name="ResetIndexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetIndexType"></a>

```csharp
private void ResetIndexType()
```

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.resetMatchType"></a>

```csharp
private void ResetMatchType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput">IndexTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType">IndexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexTypeInput`<sup>Optional</sup> <a name="IndexTypeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexTypeInput"></a>

```csharp
public string IndexTypeInput { get; }
```

- *Type:* string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.indexType"></a>

```csharp
public string IndexType { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>

---


### GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference <a name="GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs">PutIndexSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIndexSpecs` <a name="PutIndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs"></a>

```csharp
private void PutIndexSpecs(IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.putIndexSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs">IndexSpecs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput">IndexSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexSpecs`<sup>Required</sup> <a name="IndexSpecs" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecs"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList IndexSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecsList</a>

---

##### `IndexSpecsInput`<sup>Optional</sup> <a name="IndexSpecsInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.indexSpecsInput"></a>

```csharp
public IResolvable|GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs[] IndexSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs">GoogleFirestoreIndexFieldsSearchConfigTextSpecIndexSpecs</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreIndexFieldsSearchConfigTextSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsSearchConfigTextSpec">GoogleFirestoreIndexFieldsSearchConfigTextSpec</a>

---


### GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfigFlat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---


### GoogleFirestoreIndexFieldsVectorConfigOutputReference <a name="GoogleFirestoreIndexFieldsVectorConfigOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexFieldsVectorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat">PutFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat">ResetFlat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlat` <a name="PutFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```csharp
private void PutFlat(GoogleFirestoreIndexFieldsVectorConfigFlat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.putFlat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```csharp
private void ResetDimension()
```

##### `ResetFlat` <a name="ResetFlat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```csharp
private void ResetFlat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">FlatInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension">Dimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference Flat { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference">GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```csharp
public double DimensionInput { get; }
```

- *Type:* double

---

##### `FlatInput`<sup>Optional</sup> <a name="FlatInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfigFlat FlatInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigFlat">GoogleFirestoreIndexFieldsVectorConfigFlat</a>

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```csharp
public double Dimension { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirestoreIndexFieldsVectorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexFieldsVectorConfig">GoogleFirestoreIndexFieldsVectorConfig</a>

---


### GoogleFirestoreIndexTimeoutsOutputReference <a name="GoogleFirestoreIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirestoreIndexTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirestoreIndexTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirestoreIndex.GoogleFirestoreIndexTimeouts">GoogleFirestoreIndexTimeouts</a>

---



