# `googleAgentRegistryBinding` Submodule <a name="`googleAgentRegistryBinding` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryBinding <a name="GoogleAgentRegistryBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBinding(Construct Scope, string Id, GoogleAgentRegistryBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig">GoogleAgentRegistryBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig">GoogleAgentRegistryBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding">PutAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthProviderBinding` <a name="PutAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding"></a>

```csharp
private void PutAuthProviderBinding(GoogleAgentRegistryBindingAuthProviderBinding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource"></a>

```csharp
private void PutSource(GoogleAgentRegistryBindingSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget"></a>

```csharp
private void PutTarget(GoogleAgentRegistryBindingTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAgentRegistryBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleAgentRegistryBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleAgentRegistryBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleAgentRegistryBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleAgentRegistryBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAgentRegistryBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding">AuthProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput">AuthProviderBindingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput">BindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId">BindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthProviderBinding`<sup>Required</sup> <a name="AuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding"></a>

```csharp
public GoogleAgentRegistryBindingAuthProviderBindingOutputReference AuthProviderBinding { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source"></a>

```csharp
public GoogleAgentRegistryBindingSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target"></a>

```csharp
public GoogleAgentRegistryBindingTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts"></a>

```csharp
public GoogleAgentRegistryBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AuthProviderBindingInput`<sup>Optional</sup> <a name="AuthProviderBindingInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput"></a>

```csharp
public GoogleAgentRegistryBindingAuthProviderBinding AuthProviderBindingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `BindingIdInput`<sup>Optional</sup> <a name="BindingIdInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput"></a>

```csharp
public string BindingIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput"></a>

```csharp
public GoogleAgentRegistryBindingSource SourceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput"></a>

```csharp
public GoogleAgentRegistryBindingTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleAgentRegistryBindingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `BindingId`<sup>Required</sup> <a name="BindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId"></a>

```csharp
public string BindingId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryBindingAuthProviderBinding <a name="GoogleAgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingAuthProviderBinding {
    string AuthProvider,
    string ContinueUri = null,
    string[] Scopes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider">AuthProvider</a></code> | <code>string</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri">ContinueUri</a></code> | <code>string</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes">Scopes</a></code> | <code>string[]</code> | The list of OAuth2 scopes of the auth provider. |

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```csharp
public string AuthProvider { get; set; }
```

- *Type:* string

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}

---

##### `ContinueUri`<sup>Optional</sup> <a name="ContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```csharp
public string ContinueUri { get; set; }
```

- *Type:* string

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}

---

### GoogleAgentRegistryBindingConfig <a name="GoogleAgentRegistryBindingConfig" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleAgentRegistryBindingAuthProviderBinding AuthProviderBinding,
    string BindingId,
    string Location,
    GoogleAgentRegistryBindingSource Source,
    GoogleAgentRegistryBindingTarget Target,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleAgentRegistryBindingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding">AuthProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId">BindingId</a></code> | <code>string</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description">Description</a></code> | <code>string</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AuthProviderBinding`<sup>Required</sup> <a name="AuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding"></a>

```csharp
public GoogleAgentRegistryBindingAuthProviderBinding AuthProviderBinding { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `BindingId`<sup>Required</sup> <a name="BindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId"></a>

```csharp
public string BindingId { get; set; }
```

- *Type:* string

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source"></a>

```csharp
public GoogleAgentRegistryBindingSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target"></a>

```csharp
public GoogleAgentRegistryBindingTarget Target { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts"></a>

```csharp
public GoogleAgentRegistryBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

### GoogleAgentRegistryBindingSource <a name="GoogleAgentRegistryBindingSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingSource {
    string Identifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier">Identifier</a></code> | <code>string</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTarget <a name="GoogleAgentRegistryBindingTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingTarget {
    string Identifier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier">Identifier</a></code> | <code>string</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTimeouts <a name="GoogleAgentRegistryBindingTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryBindingAuthProviderBindingOutputReference <a name="GoogleAgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingAuthProviderBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">ResetContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinueUri` <a name="ResetContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```csharp
private void ResetContinueUri()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">AuthProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">ContinueUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">AuthProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">ContinueUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthProviderInput`<sup>Optional</sup> <a name="AuthProviderInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```csharp
public string AuthProviderInput { get; }
```

- *Type:* string

---

##### `ContinueUriInput`<sup>Optional</sup> <a name="ContinueUriInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```csharp
public string ContinueUriInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `AuthProvider`<sup>Required</sup> <a name="AuthProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```csharp
public string AuthProvider { get; }
```

- *Type:* string

---

##### `ContinueUri`<sup>Required</sup> <a name="ContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```csharp
public string ContinueUri { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```csharp
public GoogleAgentRegistryBindingAuthProviderBinding InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---


### GoogleAgentRegistryBindingSourceOutputReference <a name="GoogleAgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleAgentRegistryBindingSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---


### GoogleAgentRegistryBindingTargetOutputReference <a name="GoogleAgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleAgentRegistryBindingTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---


### GoogleAgentRegistryBindingTimeoutsOutputReference <a name="GoogleAgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleAgentRegistryBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleAgentRegistryBindingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---



